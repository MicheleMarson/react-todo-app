import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../style/box.css"
import Todo from './Todo'

const Box = ({APIData, getData}) => {
  const [filterValues, setFilterValues] = useState({checked:"all", date:"all"})

  return (
    <div className="box">
      <form className="box__search">
        <input placeholder="search..." />
        <div className="box__select">
          <div className="box__select-date">
            <select name="date" className="date">
              <option value="all" selected disabled>date</option>
              <option value="newest">newest</option>
              <option value="oldest">oldest</option>
            </select>
          </div>
          <div className="box__select-completed">
            <select name="is-completed">
              <option value="all" selected disabled>not/completed</option>
              <option value="">completed</option>
              <option value="">not completed</option>
            </select>
          </div>
        </div>
        <div className="box__bottom"></div>
      </form>
      <section className="box__todos">
        {APIData && (APIData.map(item => (
          <Todo getData={getData} key={item.id} task={item.task} date={item.date} 
          checked={item.checked} id={item.id} />
        )))}
      </section>
    </div>
  )
}

export default Box
