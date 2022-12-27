/**
 * Create the Redux Actions
 * 
 * The Redux Actions defines the events that could occur in our application
 */

//Action Type
export const CREATE_TODO = 'CREATE_TODO';
//Exporting a function, also call the "actionCreator"
export const createTodo = text => ({
    type: CREATE_TODO,//Asign the type of event for the switch in reducers.js
    payload: { text },//The payload is the text itself
});

export const REMOVE_TODO = 'REMOVE_TODO';
//Action Creator
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
//Action Creator
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});