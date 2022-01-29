import React from "react";
import menu from "./Icons/menu.png";
import "./Head.scss"
const Head = () => {
  return (
    <div className="head">
      <div className="logo">
        <h2>To Do List</h2>
      </div>
      <div className="menu">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Head;
