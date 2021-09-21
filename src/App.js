import axios from 'axios'
import React, {useEffect, useState} from "react"
import Box from "./components/Box";
import Form from "./components/Form";

function App() {
  const [APIData, setAPIData] = useState([])
  const url = process.env.REACT_APP_URL

  const getData = () => { // get data on initial load
    axios.get(url)
    .then(data => {
      setAPIData(data.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="app">
      <h1 className="app__title">Todo App</h1>
      <Form APIData={APIData} getData={getData}/>
      {APIData.length > 0 ? (
        <Box setAPIData={setAPIData} APIData={APIData} getData={getData} />
      ):(
        <h2 className="no-data">Todo list empty</h2>
      )}
    </div>
  );
}

export default App;
