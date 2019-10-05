import React from 'react';
import PropTypes from 'prop-types';
const Todo = ({ onClick, onTodoEdit, onBlurItem, id, completed, text, editable}) => {
    if (editable) {
        return <input value={text} onChange={(e) => onTodoEdit(id, e.target.value)} onBlur = { () => onBlurItem(id)} />
    } else {
        return (
            <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {text}
                <span onClick={() => onClick(id, "delete-item")} style={{ paddingLeft: 8 }}>删除</span>
                <span onClick={() => onClick(id, "change-item-edit")} style={{ paddingLeft: 8 }}>编辑</span>
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;