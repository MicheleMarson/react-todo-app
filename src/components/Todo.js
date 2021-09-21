import axios from 'axios'
import React, {useEffect, useState} from 'react'
import "../style/todo.css"
import SaveIcon from './SaveIcon'
import UpdateIcon from './UpdateIcon'
// import update from "../img/pencil.svg"
import {currentDate} from "../currentDate"
import DeleteIcon from './DeleteIcon'
import {url} from "../url"

const Todo = ({task, id, date, checked, getData}) => {
  // state------------------------------------
  const [newInputDate, setNewInputDate] = useState(date)
  const [newTask, setNewTaks] = useState(task)
  const [isChecked, setIsChecked] = useState(checked)
  const [isUpdating, setIsUpdating] = useState(false)
  const [unfinished, setUnfinished] = useState(false) // check if task was completed in time
  // state------------------------------------

  useEffect(() => {
    if(date === currentDate && !isChecked){
      setUnfinished(true)
    }
  },[])

  // delete task
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
        <DeleteIcon/>
      </div>
    </div>
  )
}

export default Todo
