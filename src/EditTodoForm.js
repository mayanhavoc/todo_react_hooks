import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({ id, task, toggleEditForm }) {
    const { editTodo } = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    console.log("Edit form")
    return (
        <form onSubmit={(e) => { 
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
            }}
            style={{ marginLeft: '1rem', width: '50%' }}
            >
            <TextField 
                margin="normal" 
                value={value} 
                onChange={handleChange} 
                fullWidth 
                autoFocus
                />
        </form>
    )
}

export default EditTodoForm
