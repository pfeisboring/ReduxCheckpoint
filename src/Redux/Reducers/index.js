import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
  ToDo: toDoReducer,
});

export default rootReducer;
