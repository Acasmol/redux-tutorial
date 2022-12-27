import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED, markTodoAsCompleted } from './actions';

/**
 * 
 * This is a reducer called 'todos'
 * 
 * The Redux Reducer specifies what should happen to the Redux Store
 * 
 * Every time any action is fired from anywhere on our application our reducer will get called. When this happens, the two
 * arguments will be passed to our reducer
 * 
 * What reducer do is take the current state and the action that was triggered and decide what changes should occur in
 * the state as the result of  this action and then, should return the updated state
 * 
 * @param {*} state Current state of whatever resource. In this case, an array of the current "todo items" in our application
 * @param {*} action The action that was triggered, which will be an objectnwith type and payload properties
 *                   The action contains:  
 *                      - type = The action to do (see file ./actions). The "string name" of the action
 *                      - payload = The content of the item created
 * 
 * @returns Redux takes this returned value and set the curren state to that
 */
        //Set the default value of our reducer to an empty array, 'state=[]'
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };
        //When working with reducers is important to no mutate the state in any way
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
    //In case that occurs an unexpected acction, return the state 'as-is'
    default:
        return state;
    }
}