
import React, {useEffect, useState} from "react"
import Box from "./components/Box";
import Form from "./components/Form";

function App() {
  
  const [todo, setTodo] = useState({})
  
  
  return (
    <div className="app">
      <h1 className="app__title">Todo App</h1>
      <Form/>
      <Box todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
