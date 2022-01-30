import React from "react";
import menu from "./Icons/menu.png";
import "./Head.scss"
import { show } from "./js";
const Head = () => {
  return (
    <div className="head">
      <div className="logo">
        <h2>To Do List</h2>
      </div>
      <div className="menu">
        <img src={menu} alt="menu" onClick={show} />
      </div>
    </div>
  );
};

export default Head;
