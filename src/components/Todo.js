import axios from 'axios'
import React, {useState} from 'react'
import "../style/todo.css"
// import update from "../img/pencil.svg"

const Todo = ({task, id, date, checked, handleDelete, getData}) => {
  const [newTask, setNewTaks] = useState(task)
  const [isChecked, setIsChecked] = useState(false)
  const url = process.env.REACT_APP_URL

  const handleComplete = (id) => {
    setIsChecked(!isChecked)
    axios.put(url+"/"+id, {
      checked:isChecked
    }).then(() => getData())
  }

  const taskUpdate = (id) => {
    axios.put(url+"/"+id, {
      task:newTask
    }).then(() => getData())
  }

  const check = {
    textDecoration:checked?"line-through":"none",
    color: checked?"rgba(255,255,255,0.5)":"#fff"
  }

  return (
    <div className="todo">
      <div onClick={() => handleComplete(id)} className="todo__check">
        <div>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 507.2 507.2" style={{"enable-background":"new 0 0 507.2 507.2"}}>
            <circle style={{"fill":"#32BA7C"}} cx="253.6" cy="253.6" r="253.6"/>
            <path style={{"fill":"#0AA06E"}} d="M188.8,368l130.4,130.4c108-28.8,188-127.2,188-244.8c0-2.4,0-4.8,0-7.2L404.8,152L188.8,368z"/>
            <path style={{"fill":"#FFFFFF"}} d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
              c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"/>
            <path style={{"fill":"#FFFFFF"}} d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
              c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"/>
          </svg>
        </div>
      </div>
      <div className="todo__task">
        <p style={check}>{task}</p>
      </div>
      <div onClick={() => taskUpdate(id)} className="todo__update">
        <svg version="1.1" id="Layer_1" x="0px" y="0px"
          viewBox="0 0 300 300" style={{"enable-background":"new 0 0 300 300"}}>
          <path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003
          S232.835,0,149.996,0z M221.302,107.945l-14.247,14.247l-29.001-28.999l-11.002,11.002l29.001,29.001l-71.132,71.126
          l-28.999-28.996L84.92,186.328l28.999,28.999l-7.088,7.088l-0.135-0.135c-0.786,1.294-2.064,2.238-3.582,2.575l-27.043,6.03
          c-0.405,0.091-0.817,0.135-1.224,0.135c-1.476,0-2.91-0.581-3.973-1.647c-1.364-1.359-1.932-3.322-1.512-5.203l6.027-27.035
          c0.34-1.517,1.286-2.798,2.578-3.582l-0.137-0.137L192.3,78.941c1.678-1.675,4.404-1.675,6.082,0.005l22.922,22.917
          C222.982,103.541,222.982,106.267,221.302,107.945z" fill="#36D2F4"/>
        </svg>
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
