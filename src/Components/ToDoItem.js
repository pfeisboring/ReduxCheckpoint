import React from "react";
import { Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Actions/Actions";

const ToDoItem = ({ toDo }) => {
  const dispatch = useDispatch();
  return (
    <div className="Item">
      <h3> {toDo.task} </h3>
      <Button.Group>
        <Button>Done</Button>
        <Button>Not Done</Button>
        <Button>Edit</Button>
        <Button onClick={() => dispatch(deleteTodo(toDo.id))}>Delete</Button>
      </Button.Group>
    </div>
  );
};

export default ToDoItem;
