import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../style/box.css"
import Todo from './Todo'
import {checkedOptions, dateOptions} from "../options"


const Box = ({APIData, getData, filterChecked, setFilterChecked, filterTask, setFilterTask}) => {
  // const url = process.env.REACT_APP_URL

  const handleFilter = (e) => {
    e.preventDefault()
    // if(filterChecked == "all"){
    //   console.log("setting");
    //   getData()
    // }else{
    //   axios.get(`${url}/?checked=${filterChecked}`)
    //     .then((data) => {
    //       setAPIData(data.data)
    //     })
    // }
    getData()
  }

  return (
    <div className="box">
      <form className="box__search">
        <input placeholder="search..." value={filterTask} onChange={(e) => setFilterTask(e.target.value)} />
        <div className="box__select">
          <div className="box__select-completed">
            <select onChange={(e) => setFilterChecked(e.target.value)} value={filterChecked} name="is-completed">
                {checkedOptions.map(item => (
                  <option value={item.value}>{item.label}</option>
                ))}
            </select>
          </div>
          {/* <div className="box__submit">
            <button type="submit">Search</button>
          </div> */}
        </div>
        <div className="box__bottom"></div>
      </form>
      <section className="box__todos">
        {APIData.length > 0 ? (APIData.map(item => (
          <Todo getData={getData} key={item.id} task={item.task} date={item.date} 
          checked={item.checked} id={item.id} />
        ))):(
          <h2 className="no-data">Todo list empty</h2>
        )}
      </section>
    </div>
  )
}

export default Box
