import React, { useState } from "react";
import "./App.scss";
import Head from "./components/Head";
import ToDoItems from "./components/ShowData/ToDoItems";
const toDoItems = [
  {
    title: "read the react book",
    state: "available",
  },
  {
    title: "read thesdsd react book",
    state: "available",
  },
  {
    title: "read sds react book",
    state: "available",
  },
  {
    title: "read thesdsdsds react book",
    state: "available",
  },
  {
    title: "read thessdsd css book",
    state: "completed",
  },
];
const App = () => {
  const [toDoList, setToDoList] = useState(toDoItems);
  const [state, setState] = useState("available");
  const completeHandler = (index) => {
    let newArr = [...toDoList];
    newArr[index].state = "completed";
    setToDoList(newArr);
  };
  const deleteHandler =(index) => {
    console.log(index)
    let newArr = [...toDoList];
    newArr[index].state = "deleted";
    setToDoList(newArr);
  };
  return (
    <div>
      <Head />
      <ToDoItems list={toDoList} state={state} onComplete={completeHandler} onDelete={deleteHandler}/>
    </div>
  );
};

export default App;
