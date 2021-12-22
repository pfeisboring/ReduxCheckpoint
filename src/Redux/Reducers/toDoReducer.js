import { ADD_TODO, DELETE_TODO } from "./../Actions/ActionsTypes";

let initialState = {
    todo: [
        { task: "learn React", id: 1 },
        { task: "learn Redux", id: 2 },
        { task: "learn Javascript", id: 3 },
    ],
    errors: [],
};
const toDoReducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_TODO:
            return { ...state, todo: [...state.todo, payload] };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((el) => el.id !== payload),
            };
        default:
            return state;
    }
};

export default toDoReducer;
