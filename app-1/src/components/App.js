import React, { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import List from "./List";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => {
    const newTodos = [...todos, item];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
