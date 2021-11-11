import { useContext, memo } from 'react';
import EditTodoForm from './EditTodoForm';
import useToggle from './hooks/useToggle';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DispatchContext } from './context/todos.context';

function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggle(false); // defaults to false, this is to be safe
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? 
            <EditTodoForm 
                id={id} 
                task={task} 
                toggleEditForm={toggle} 
            />: 
            <>
            <Checkbox 
                tabIndex={-1} 
                checked={completed} 
                onClick={() => dispatch({ type: "TOGGLE", id: id })}/>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete' onClick={() => dispatch({ type: "REMOVE",  id: id })}>
                    <DeleteIcon  />
                </IconButton>
                <IconButton aria-label='Edit' onClick={toggle}>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    )
}

export default memo(Todo);
