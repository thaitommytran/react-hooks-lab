import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res.data.results);
      setList(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      {list.map((element, index) => {
        return <ListItem name={element.name} key={index} />;
      })}
      <ListItem />
    </div>
  );
}

export default App;
