import React from 'react'
import { useState } from 'react'
import "../style/box.css"
import Todo from './Todo'

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
      <form className="box__search">
        <input placeholder="search..." />
        <div className="box__select">
          <div className="box__select-date">
            <select name="date" className="date">
              <option value="newest">newest</option>
              <option value="oldest">oldest</option>
            </select>
          </div>
          <div className="box__select-completed">
            <select>
              <option value="">completed</option>
              <option value="">not completed</option>
            </select>
          </div>
        </div>
        <div className="box__bottom"></div>
      </form>
      <section className="box__todos">
        <Todo />
      </section>
    </div>
  )
}

export default Box
