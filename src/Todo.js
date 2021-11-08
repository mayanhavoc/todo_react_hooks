import React from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';



function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false); // defaults to false, this is to be safe
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? 
            <EditTodoForm 
                id={id} 
                task={task} 
                toggleEditForm={toggle} 
                editTodo={editTodo}
            />: 
            <>
            <Checkbox 
                tabIndex={-1} 
                checked={completed} 
                onClick={() => toggleTodo(id)}/>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete'>
                    <DeleteIcon onClick={() => removeTodo(id)} />
                </IconButton>
                <IconButton aria-label='Edit'>
                    <EditIcon onClick={toggle}/>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default Todo
