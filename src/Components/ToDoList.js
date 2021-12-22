import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "../Components/ToDoItem";

const ToDoList = () => {
  const toDoList = useSelector((state) => state.ToDo.todo);

  return (
    <div>
      {toDoList.map((toDo, i) => (
        <ToDoItem key={i} toDo={toDo} />
      ))}
    </div>
  );
};

export default ToDoList;
