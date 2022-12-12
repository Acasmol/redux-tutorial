import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, markTodoAsCompleted } from './actions';

/**
 * 
 * This is a reducer called 'todos'
 * 
 * Every time any action is fired from anywhere on our application our reducer will get called
 * 
 * @param {*} state Current state of whatever resource. In this case, an array of the current "todo items" in our application
 * @param {*} action The action that was triggered, which will be an objectnwith type and payload properties
 * @returns 
 */
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }
    case MARK_TODO_AS_COMPLETED: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
    }
    default:
        return state;
    }
}