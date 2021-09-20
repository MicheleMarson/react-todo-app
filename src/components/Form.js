import React, { useState } from 'react'
import axios from 'axios';

const Form = ({getData, APIData}) => {
  let curr = new Date();
  const url = process.env.REACT_APP_URL
  curr.setDate(curr.getDate());
  let date =  curr.toISOString().substr(0,10)
  const [inputDate, setInputDate] = useState(date)
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
      console.log(APIData);
      setNewTask("")
      setInputDate(date)
    }
  }

  return (
    <form onSubmit={handleSubmit.bind(this)} className="app__inputBox">
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
}

export default Form
