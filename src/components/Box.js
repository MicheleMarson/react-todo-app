import React from 'react'
import { useState } from 'react'

const Box = ({todo, setTodo}) => {
  const [completed, setCompleted] = useState(false)
  const [APIDate, setAPIDate] = useState([])
  const handleCompleted = () => {
    setCompleted(!completed)
    setTodo({...todo, completed:completed})
    console.log(todo);
  }

  return (
    <div className="box">
      <div>todo</div>
      <button onClick={handleCompleted}>set completed</button>
    </div>
  )
}

export default Box
