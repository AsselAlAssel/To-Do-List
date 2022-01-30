import React, { useState } from "react";
import "./NewToDoItemForm.scss";
const NewToDoItemForm = (props) => {
  const [toDoText, settoDoText] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const item = {
      title: toDoText,
      state: "available",
    };

    props.onAdd(item);

    settoDoText("");
  };
  const inputChangeHandler = (e) => {
    settoDoText(e.target.value);
  };
  return (
    <div className="to-do-form" onSubmit={submitHandler}>
      <form action="">
        <div>
          <input
            type="text"
            name="newToDo"
            id="newToDo"
            placeholder="Add New ToDo"
            className="input-todo"
            onChange={inputChangeHandler}
            value={toDoText}
            required
          />

          <input type="submit" className="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};
export default NewToDoItemForm;
