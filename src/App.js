import axios from 'axios'
import React, {useEffect, useState} from "react"
import Box from "./components/Box";
import Form from "./components/Form";
import {url} from "./url"

function App() {
  // state------------------------------------
  const [filterTask, setFilterTask] = useState("")
  const [filterChecked, setFilterChecked] = useState("all")
  const [APIData, setAPIData] = useState([])
  // state------------------------------------

  const filterText = (item) => {
    return item.task.toLowerCase().includes(filterTask.toLowerCase())
  }

  const getData = () => { 
    if(filterChecked === "all"){
      axios.get(url)
        .then(data => {
          setAPIData(data.data.filter((i) => filterText(i)))
        })
    }else{
      axios.get(`${url}/?checked=${filterChecked}`)
        .then((data) => {
          setAPIData(data.data.filter((i) => filterText(i)))
        })
    }
  }

  useEffect(() => {// get data on initial load/filtering
    getData()
  },[filterTask, filterChecked])

  return (
    <div className="app">
      <h1 className="app__title">Todo App</h1>
      <Form APIData={APIData} getData={getData}/>
      <Box 
        setAPIData={setAPIData} APIData={APIData} getData={getData} 
        filterChecked={filterChecked} setFilterChecked={setFilterChecked}
        filterTask={filterTask} setFilterTask={setFilterTask} 
      />
    </div>
  );
}

export default App;
