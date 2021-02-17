import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={HandleFormSubmit}>
      <input
        type="text"
        className="form-input"
        required
        placeholder="Enter a new to-do item here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.string.isRequired,
};

export default TodoForm;
