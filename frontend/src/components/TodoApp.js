import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // Fetch all todos from the backend
    const fetchTodos = async () => {
        try {
            const response = await axios.get('https://mern-todo-ts7z.onrender.com:10000/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    // Add a new todo
    const addTodo = async () => {
        if (!newTodo.trim()) return;

        try {
            const response = await axios.post('https://mern-todo-ts7z.onrender.com:10000/api/todos', { text: newTodo });
            setTodos([...todos, response.data]);
            setNewTodo("");
        } catch (error) {
            console.error("Error adding todo", error);
        }
    };

    // Toggle status of a todo
    const toggleTodo = async (id, currentStatus) => {
        try {
            await axios.patch(`https://mern-todo-ts7z.onrender.com:10000/api/todos/${id}`, { status: !currentStatus });
            setTodos(todos.map(todo => 
                todo._id === id ? { ...todo, status: !currentStatus } : todo
            ));
        } catch (error) {
            console.error("Error updating todo", error);
        }
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        try {
            await axios.delete(`https://mern-todo-ts7z.onrender.com:10000/api/todos/${id}`);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (error) {
            console.error("Error deleting todo", error);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }} id='todolist'>
            <h1>ToDo List</h1>
            <input 
                type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Add new todo" 
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span 
                            onClick={() => toggleTodo(todo._id, todo.status)} 
                            style={{
                                textDecoration: todo.status ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {todo.text} - {new Date(todo.date).toLocaleString()}
                        </span>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
