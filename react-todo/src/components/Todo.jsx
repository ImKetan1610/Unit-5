import { useState } from "react";
import { nanoid } from "nanoid";
import { Delete } from "./Delete";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [TodoData, setTodoData] = useState([]);
  const [DeleteData, setDeleteData] = useState([]);

  const getData = (id) => {
    const data = document.getElementById(id).value;
    document.getElementById(id).value = "";
    setTodoData([...TodoData, {
      title: data,
      status: false,
      id: nanoid(5),
    }]);
  };

  const deletedData = (data) => {
    let delData = data.filter((ele) => {
      return ele.status === true;
    });

    setDeleteData(delData);
  };

  const toggle = (id) => {
    setTodoData([
      ...TodoData.map((ele) => {
        return ele.id === id ? { ...ele, status: !ele.status } : ele;
      }),
    ]);
  };

  return (
    <>
      <div>
        <input id='user-input' placeholder='+ Add to-do'></input>
        <button
          onClick={() => {
            getData("user-input");
          }}
          id='plus'
        >
          +
        </button>
      </div>
      <TodoList data={TodoData} toggle={toggle} />
      <button
        onClick={() => {
          deletedData(TodoData);
        }}
        className='btn'
      >
        Show Deleted Todos
      </button>
      <Delete data={DeleteData} />
    </>
  );
};
