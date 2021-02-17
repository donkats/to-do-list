import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const HandleFormSubmit = e => {
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
                    onChange={e => setValue(e.target.value)}
                />
            <button className="submit-btn">Submit</button>
        </form>
    )
}

export default TodoForm;
