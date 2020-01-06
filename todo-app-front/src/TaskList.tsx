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
import Task from "./Task"

interface Props {
    tasks: Array<ITask>
    handleCompleteTask: (task: ITask) => void
    handleDeleteTask: (task: ITask) => void
}

const TaskList: React.FC<Props> = (props) => {
  return (
    <div>
      {props.tasks.filter(task => !task.deleted).map(task => {
        return <Task task={task} handleCompleteTask={props.handleCompleteTask} handleDeleteTask={props.handleDeleteTask}/>
      })}
    </div>
  );
}

export default TaskList;
