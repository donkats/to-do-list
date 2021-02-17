import React from 'react';

const TodoItem = ({ todo, index, handleStrikeClick, handleDeleteClick }) => {
    return (
        <div className="todo-item">
            <span className={todo.isCompleted ? 'strike-through' : ''}>{todo.itemtext}</span>

            <button className="delete-btn" onClick={() => handleDeleteClick(index)}>X</button>
            <button className="strike-btn" onClick={() => handleStrikeClick(index)}>✔</button>
        </div>
    )
};

export default TodoItem;

