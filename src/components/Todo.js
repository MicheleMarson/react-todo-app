import axios from 'axios'
import React, {useEffect, useState} from 'react'
import "../style/todo.css"
import SaveIcon from './SaveIcon'
import UpdateIcon from './UpdateIcon'
// import update from "../img/pencil.svg"
import {currentDate} from "../currentDate"

const Todo = ({task, id, date, checked, getData}) => {
  const [newInputDate, setNewInputDate] = useState(date)
  const [newTask, setNewTaks] = useState(task)
  const [isChecked, setIsChecked] = useState(checked)
  const [isUpdating, setIsUpdating] = useState(false)
  const [unfinished, setUnfinished] = useState(false) // check if task was completed in time
  const url = process.env.REACT_APP_URL

  useEffect(() => {
    if(date === currentDate && !isChecked){
      setUnfinished(true)
    }
  },[])

  const handleDelete = (id) => {
    axios.delete(url+"/"+id)
      .then(() => getData())
  }

  // update checked
  const handleComplete = (id) => {
    setIsChecked(!isChecked)
    axios.put(url+"/"+id, {
      checked:!isChecked
    }).then(() => getData())
  }

  const taskUpdate = (id) => {
    setIsUpdating(!isUpdating)
    if(newTask != task || date != newInputDate){ // change task only if we change the input value
      axios.put(url+"/"+id, {
        task:newTask,
        date:newInputDate
      }).then(() => getData())
    }
  }


  // -------------style----------------------------
  const check = {
    textDecoration:checked?"line-through":"none",
    color: checked?"rgba(255,255,255,0.5)":"#fff"
  }
  const displayCheckOnUpdate = {
    display: isUpdating?"none":"block"
  }
  // -------------style----------------------------

  return (
    <div className={`todo ${isUpdating?"updating":""}`}>
      <div style={displayCheckOnUpdate} onClick={() => handleComplete(id)} 
        className={`todo__check ${checked?"is-checked":""}`}>
          {/* {unfinished ? (
            <div></div>
          ):( */}
            <div>
              <svg style={{display: checked?"block":"none"}} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 507.2 507.2" style={{"enable-background":"new 0 0 507.2 507.2"}}>
                <circle style={{"fill":"#32BA7C"}} cx="253.6" cy="253.6" r="253.6"/>
                <path style={{"fill":"#0AA06E"}} d="M188.8,368l130.4,130.4c108-28.8,188-127.2,188-244.8c0-2.4,0-4.8,0-7.2L404.8,152L188.8,368z"/>
                <path style={{"fill":"#FFFFFF"}} d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
                  c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"/>
                <path style={{"fill":"#FFFFFF"}} d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
                  c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"/>
              </svg>
            </div>
          {/* )} */}
      </div>
      <div className="todo__task">
        {isUpdating?(
          <>
            <input onChange={(e) => setNewInputDate(e.target.value)} className="todo__input-date" type="date" id="input-date" value={newInputDate} />
            <input onChange={(e) => setNewTaks(e.target.value)} className="todo__input-update" value={newTask} type="text" />
          </>
          ):(
          <>
            <p className="todo__date">{date.split("-").splice(1, 2).join("-")}</p>
            <p className="todo__task--input" style={check}>{task}</p>
          </>
        )}
      </div>
      <div onClick={() => taskUpdate(id)} className="todo__update">
        <div style={{display: isUpdating?"block":"none"}} className="todo__update-save">
          <SaveIcon/>
        </div>
        {/* if the task is completed update is removed */}
        <div style={{display: isUpdating || isChecked?"none":"block"}} className="todo__update-updating">
          <UpdateIcon/>
        </div>
      </div>
      <div onClick={() => handleDelete(id)} className="todo__delete">
        <svg height="512pt" viewBox="0 0 512 512" width="512pt">
          <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/>
          <path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 
          0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 
          0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 
          0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 
          8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/>
        </svg>
      </div>
    </div>
  )
}

export default Todo
