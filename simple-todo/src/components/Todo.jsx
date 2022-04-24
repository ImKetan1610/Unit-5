import { useState } from "react";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";
import "./Todo.css"

export const Todo = () => {
  const [TodoData, setTodoData] = useState([]);

  const getData = (id) => {
    const data = document.getElementById(id).value;
    // document.getElementById(id).value = "";
    setTodoData([
      ...TodoData,
      {
        title: data,
        status: false,
        id: nanoid(5),
      },
    ]);
  };

  const toggle = (id) => {
    setTodoData([
      ...TodoData.map((e) => {
        return e.id === id ? { ...e, status: !e.status } : e;
      }),
    ]);
  };

  return (
    <div id ="main">
      
      <input id='todoInput' placeholder='Write Something'></input>
      <button id = "add"
        onClick={() => {
          getData("todoInput");
        }}
      >
        +
      </button>
      <TodoList data={TodoData} toggle={toggle} />
    </div>
  );
};
