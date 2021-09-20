import axios from 'axios'
import React, {useEffect, useState} from "react"
import Box from "./components/Box";
import Form from "./components/Form";

function App() {
  const [APIData, setAPIData] = useState([])
  const url = process.env.REACT_APP_URL

  const getData = () => {
    axios.get(url)
      .then(data => setAPIData(data.data))
    
      console.log(APIData);
  }

  useEffect(() => {
    getData()
  },[])
  
  
  return (
    <div className="app">
      <h1 className="app__title">Todo App</h1>
      <Form getData={getData}/>
      <Box APIData={APIData} getData={getData} />
    </div>
  );
}

export default App;
