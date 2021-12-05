import React, { useState } from 'react'
import axios from 'axios';
import {currentDate} from "../currentDate"
import {url} from "../url"

const Form = React.memo(({getData, APIData}) => {
  // date is the time the task shoud be finished
  // setting the default date

  const [inputDate, setInputDate] = useState(currentDate) // if date is not provided get the current date
  const [newTask, setNewTask] = useState("") // set new task

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(newTask){ // if input is not empty
      axios.post(url, {
        task:newTask,
        date: inputDate,
        checked: false
      }).then(() => getData())

      // after submition reset values
      setNewTask("")
      setInputDate(currentDate)
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="app__inputBox">
      <div className="app__input">
        <div id="input-wrap">
          <input autoComplete="off" type="text" id="input-task" value={newTask}
          placeholder="Add new task" onChange={(e) => setNewTask(e.target.value)}/>
          <input onChange={(e) => setInputDate(e.target.value)} 
          type="date" id="input-date" value={inputDate} />
        </div>
        <div id="input-border"></div>
      </div>
      <button type="submit" className="app__add">
        <div id="plus-h"></div>
        <div id="plus-w"></div>
      </button>
    </form>
  )
})

export default Form
