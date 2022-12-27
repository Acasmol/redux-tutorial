import React, { useState } from 'react';
//High order functions. This means that we call it with two different sets of arguments
import { connect } from 'react-redux';
import { createTodo } from './actions'; //What acction needs to be happen in this component
import './NewTodoForm.css';

/**
 * This is a form to create an TodoListItem.js object
 * 
 * @param todos
 * @param onCreatePresed
 * @returns 
 */

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    );
};

/**
 * 
 * @param {*} state  The object that Represents the Redux State
 * @returns Take the state object and return another object containing the pieces of that state that our component needs to access to
 */
const mapStateToProps = state => ({
    todos: state.todos,
});

/**
 * The Dispatch a function that allows to our componetns to trigger actions that our Redux store will respond to
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

                                                           //The component that we want to connect to the Redux Store       
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);