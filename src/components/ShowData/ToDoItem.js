import React from "react";
import "./ToDoItem.scss";

const ToDoItem = (props) => {
  const doneClickHandler = () => {
    //document.querySelector("#card"+props.id).classList.add("expire")
    props.onComplete(props.id);
  };
  const deleteClickHandler = () => {
    //document.querySelector("#card"+props.id).classList.add("expire")
    props.onDelete(props.id);
    console.log(props.id)
  };
  return (
    <div className="card" id={"card" + props.id}>
      <div className="title">
        <h3>{props.item.title}</h3>
      </div>
      <div className="card-complete-delete">
        <div>
          <button className="done" onClick={doneClickHandler}>
            Done
          </button>
        </div>
        <div>
          <button className="delete" onClick={deleteClickHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoItem;
