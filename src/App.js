import React, {useState} from "react"

function App() {
  const [inputDate, setInputDate] = useState("")
  const [newTask, setNewTask] = useState("") // set new task

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="app">
      <h1 className="app__title">Todo App</h1>
      <form onSubmit={handleSubmit.bind(this)} className="app__inputBox">
        <div className="app__input">
          <div id="input-wrap">
            <input autoComplete="off" value={newTask} type="text" id="input-task" 
            placeholder="Add new task"  onChange={(e) => setNewTask(e.target.value)}/>
            <input onChange={(e) => setInputDate(e.target.value)} value={inputDate} type="date" id="input-date" />
          </div>
          <div id="input-border"></div>
        </div>
        <button type="submit" className="app__add">
          <div id="plus-h"></div>
          <div id="plus-w"></div>
        </button>
      </form>
    </div>
  );
}

export default App;
