import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  todo, index, handleStrikeClick, handleDeleteClick,
}) => (
  <div className="todo-item">
    <span className={todo.isCompleted ? 'strike-through' : ''}>{todo.itemtext}</span>

    <button type="button" className="delete-btn" onClick={() => handleDeleteClick(index)}>X</button>
    <button type="button" className="strike-btn" onClick={() => handleStrikeClick(index)}>✔</button>
  </div>
);

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  handleStrikeClick: PropTypes.string.isRequired,
  handleDeleteClick: PropTypes.string.isRequired,
};

export default TodoItem;
