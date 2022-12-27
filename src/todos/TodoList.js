import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';
import './TodoList.css';

/**
 * 
 * @param todos = [], it is an array of TodoListItem.js
 * @param onRemovePressed
 * @param onCompletedPressed
 * @returns 
 */
const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {/*This is a lambda expression which iterates ove the TodoListItem.js objects
        inside the 'todos' list */}
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

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
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);