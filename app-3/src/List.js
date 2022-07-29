import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      console.log(res.data.results);
      setList(res.data.results);
    });
  }, []);

  const listMapped = list.map((item, index) => {
    return (
      <Link to={`${item.name}`} key={index}>
        <h3>{item.name}</h3>
      </Link>
    );
  });

  return <div>{listMapped}</div>;
};

export default List;
