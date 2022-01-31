import React, { useState } from "react";
import "./NewToDoItemForm.scss";
const NewToDoItemForm = (props) => {
  const [toDoText, settoDoText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    if(toDoText.trim().length===0){
      setIsValid(false);
      return;
    }
 
    const item = {
      title: toDoText,
      state: "available",
    };

    props.onAdd(item);

    settoDoText("");
  };
  const inputChangeHandler = (e) => {
    if(e.target.value.trim().length>0){
      setIsValid(true);
    }
    settoDoText(e.target.value);
  };
  const clearHandler = () => {
    settoDoText("");
    props.onClear();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`to-do-form ${!isValid ? 'invalid':""}`}>
        <div>
          <input
            type="text"
            name="newToDo"
            id="newToDo"
            placeholder="Add New ToDo"
            className="input-todo"
            onChange={inputChangeHandler}
            value={toDoText}
          />
        </div>

        <div className="btns">
          <button type="submit" className="submit">
            Add
          </button>
          <button type="button" className="clear" onClick={clearHandler}>Clear All</button>
        </div>
      </div>
    </form>
  );
};
export default NewToDoItemForm;
