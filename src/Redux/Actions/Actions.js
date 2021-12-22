import { ADD_TODO, DELETE_TODO } from "./ActionsTypes";
// action creator ( addTodo)
export const addTodo = (newItem) => {
    return {
        type: ADD_TODO,
        payload: newItem,
    };
};
// action creator ( deleteTodo)
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};
