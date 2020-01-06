import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { makeStyles } from '@material-ui/core/styles';
import {ITask} from "./TaskModel"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#ffffff',
    maxWidth: '800px'
  },
  notComplete: {
    color: "#333333",
  },
  completed: {
    color: "#cccccc",
    textDecoration: "line-through"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

interface TaskProps {
    task: ITask
    handleCompleteTask: (task: ITask) => void
    handleDeleteTask: (task: ITask) => void
}

const Task: React.FC<TaskProps> = (props) => {
  const classes = useStyles();
    const [isCompleted, setComplete] = useState(false);
    const [isDeleted, setDelete] = useState(false);

    const handleDeleteButton = () => {
        props.handleDeleteTask(props.task);
    };

    const handleCompleteChange = () => {
        setComplete(!isCompleted);

        props.handleCompleteTask(props.task);
    };

    return (
        <>
        {!isDeleted && (
           <div className={classes.container}>
               <Checkbox onChange={handleCompleteChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />
               <span className={isCompleted ? classes.completed : classes.notComplete}>{props.task.title}</span>
               <Button variant="contained" color="secondary" onClick={handleDeleteButton}>
                 削除
               </Button>
           </div>
        )}
       </>
    );
}

export default Task;
