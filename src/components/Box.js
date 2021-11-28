import React from 'react'
import "../style/box.css"
import Todo from './Todo'
import {checkedOptions} from "../options"


const Box = (props) => {
  const {APIData, getData, filterChecked, setFilterChecked,
    filterTask, setFilterTask} = props

  return (
    <div className="box">
      <form className="box__search">
        <input placeholder="search..." value={filterTask} onChange={(e) => setFilterTask(e.target.value)} />
        <div className="box__select">
          <div className="box__select-completed">
            <select onChange={(e) => setFilterChecked(e.target.value)} value={filterChecked} name="is-completed">
              {checkedOptions.map((item, i) => (
                <option key={i} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="box__bottom"></div>
      </form>
      <section className="box__todos">
        {APIData.length > 0 ? (APIData.map(item => (
          <Todo key={item.id} getData={getData} task={item.task} date={item.date} 
          checked={item.checked} id={item.id} />
        ))):(
          <h2 className="no-data">Todo list empty</h2>
        )}
      </section>
    </div>
  )
}

export default Box
