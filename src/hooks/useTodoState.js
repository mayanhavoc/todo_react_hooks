import { useState } from 'react';
import { useLocalStorageState } from './useLocalStorageState';
import { uuid } from 'uuidv4';

export default initialTodos => {
    // create space in the state
    const [ todos, setTodos ] = useLocalStorageState("todos", initialTodos);
    return {
        todos, 
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoId => {
            // filter out removed todo
            const updatedTodos = todos.filter(todo => todo.id !== todoId);
            // call setTodos with new todos array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            // filter out removed todo
            const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
            // call setTodos with new todos array
            setTodos(updatedTodos);
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => 
                    todo.id === todoId ? {...todo, task: newTask} : todo
                );
            setTodos(updatedTodos);
        }
    };
};


