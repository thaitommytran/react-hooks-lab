import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "./List";
import Item from "./Item";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />}></Route>
        <Route path="/:name" element={<Item />}></Route>
      </Routes>
    </div>
  );
}

export default App;
