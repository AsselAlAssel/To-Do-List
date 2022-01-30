import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoItems.scss";
const ToDoItems = (props) => {
  // filter and show the to do item
  let filterList = props.list.filter((ele) => ele.state === props.state);
  let Items = filterList.map((ele, index) => (
    <ToDoItem
      item={ele}
      key={index}
      id={ele.id}
      onComplete={props.onComplete}
      onDelete={props.onDelete}
    />
  ));
  if (Items.length === 0) {
    return (
      <h2
        style={{ textAlign: "center", backgroundColor: "red", width: "100%" }}
      >
        There are no data
      </h2>
    );
  }

  return <div className="to-do-items">{Items}</div>;
};
export default ToDoItems;
