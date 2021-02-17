import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const { uuid } = require('uuidv4');

const TodoList = () => {

    const [todos, setTodos] = useState([
        {
            itemtext: 'Buy more plants',
            isCompleted: false
        }
    ]);

    const addTodo = itemtext => {
        const newTodos = [...todos, { itemtext }];
        setTodos(newTodos)
    };

    const handleStrikeClick = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const handleDeleteClick = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="container">
            <h1 className="title">To-do list Komensky</h1>
            <TodoForm addTodo={addTodo} />

            <div className="todo-list">
                {todos.map((todoitem, index) => (
                    <TodoItem
                        key={uuid()}
                        todo={todoitem}
                        index={index}
                        handleStrikeClick={handleStrikeClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
