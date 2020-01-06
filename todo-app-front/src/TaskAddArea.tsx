import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {ITask} from "./TaskModel"

interface Props {
    addTask: (newTask: ITask) => void
    getNextTaskId: () => number
}

const TaskAddArea: React.FC<Props> = (props) => {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const handleAddTask = () => {
    props.addTask({
        id: props.getNextTaskId(),
        title: title,
        completed: false,
        deleted: false,
    });
    setTitle('');
  };

    return (
        <div>
            <TextField label="タスクを入力" onChange={handleChangeTitle} value={title}/>
            <Button variant="contained" color="primary" onClick={handleAddTask} >
               追加
            </Button>
        </div>
    );
}

export default TaskAddArea;
