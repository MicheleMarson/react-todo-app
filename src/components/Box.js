import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "../style/box.css"
import Todo from './Todo'

const Box = ({APIData, getData}) => {
  // const [APIData, setAPIData] = useState([])
  const url = process.env.REACT_APP_URL

  // const getData = () => {
  //   axios.get(url)
  //     .then(data => setAPIData(data.data))
  // }

  // useEffect(() => {
  //   getData()
  // },[])

  const handleDelete = (id) => {
    axios.delete(url+"/"+id)
      .then(() => getData())
  }

  // console.log(APIData);


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
        {APIData ? (APIData.map(item => (
          <Todo getData={getData} handleDelete={handleDelete} key={item.id} task={item.task} date={item.date} 
          checked={item.checked} id={item.id} />
        ))
        ):(<p>no tasks</p>)}
      </section>
    </div>
  )
}

export default Box
