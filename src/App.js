import React, { useState } from "react";
import Head from "./components/Head";
const toDoItems = [
  {
    title: "read the react book",
    stat: "available",
  },
  {
    title: "read the css book",
    stat: "completed",
  },
];
const App = () => {
  const [toDoList, setToDoList] = useState(toDoItems);

  return (
    <div>
      <Head />
    </div>
  );
};

export default App;
