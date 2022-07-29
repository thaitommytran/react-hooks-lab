import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const { name } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  }, []);

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.sprites?.front_default} alt="" />
    </div>
  );
};

export default Item;
