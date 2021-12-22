import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions/Actions";

const AddToDo = () => {
  const dispatch = useDispatch();
  const addRef = useRef();
  const handleAdd = () => {
    dispatch(addTodo({ task: addRef.current.value, id: Math.random() }));
    addRef.current.value = "";
  };
  return (
    <div>
      <div className="ui fluid action input">
        <input type="text" placeholder="Add tasks" ref={addRef} />
        <div className="ui button" onClick={() => handleAdd()}>
          Add
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
