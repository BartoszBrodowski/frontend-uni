import { useState } from "react";
import TodoList from "./components/TodoList";
import Date from "./components/Date";
import './App.css'

function App() {
    const [todos, setTodos] = useState([{todo: "Dishes", date: "19.10.2022"}, {todo: "Cleaning", date: "19.10.2022"}])
    const handleSubmit = (e) => {
      e.preventDefault()
      const todo = {todo: "Test", date: "20.10.2022"}
      setTodos(prevTodos => [...prevTodos, todo])
    }

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Date />
          <TodoList todos={todos}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
}

export default App;
