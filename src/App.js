import React, { useState } from "react";
import "./App.scss";
import FilterShow from "./components/FilterShow/FilterShow";
import Head from "./components/Head";
import NewToDoItemForm from "./components/NewToDoItem/NewToDoItemForm";
import ToDoItems from "./components/ShowData/ToDoItems";
const stateList = ["available", "completed", "deleted"];
const toDoItems = [
  {
    title: "read the react book",
    state: "available",
    id: 0,
  },
  {
    title: "read thesdsd react book",
    state: "available",
    id: 1,
  },
  {
    title: "read sds react book",
    state: "available",
    id: 2,
  },
  {
    title: "read thesdsdsds react book",
    state: "available",
    id: 3,
  },
  {
    title: "read thessdsd css book",
    state: "completed",
    id: 4,
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
  const deleteHandler = (index) => {
    console.log(index);
    let newArr = [...toDoList];

    newArr[index].state = "deleted";
    console.log(newArr);
    setToDoList(newArr);
  };

  const addNewItem = (newItem) => {
    newItem["id"] = toDoList.length;
    console.log(newItem);
    setToDoList((prev) => [...prev, newItem]);
  };

  const changeStateHandler = (stateChecked) => {

    setState(stateChecked);
  };
  const clearHandle = () => {
    setToDoList([]);
  };
  return (
    <div>
      <Head />
      <NewToDoItemForm onAdd={addNewItem} />
      <FilterShow
        state={state}
        stateList={stateList}
        onChangeState={changeStateHandler}
        
      />
      {/* <h2 style={{textAlign:"center"}}>{state.toUpperCase()}</h2> */}
      <ToDoItems
        list={toDoList}
        state={state}
        onComplete={completeHandler}
        onDelete={deleteHandler}
      />
    </div>
  );
};

export default App;
