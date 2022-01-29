import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoItems.scss"
const ToDoItems = (props) => {
  // filter and show the to do item
  let filterList = props.list.filter((ele) => ele.state === props.state);
  let Items = filterList.map((ele, index) => (
    <ToDoItem item={ele} key={index} id={index} onComplete={props.onComplete} onDelete={props.onDelete} />
  ));

  return <div className="to-do-items">{Items}</div>;
};
export default ToDoItems;
