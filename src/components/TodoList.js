import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onTodoEdit, onBlurItem }) => (
    <ul>
        { todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={onTodoClick} onTodoEdit={onTodoEdit} onBlurItem={onBlurItem} />
        ))}
    </ul>    
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ),
     onTodoClick: PropTypes.func.isRequired
}

export default TodoList;