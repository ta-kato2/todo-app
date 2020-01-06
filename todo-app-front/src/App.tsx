import React, { useState } from 'react';
import './App.css';
import TaskAddArea from "./TaskAddArea"
import TaskList from "./TaskList"
import {ITask} from "./TaskModel"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ffeeee'
  }
}));

const initialDate:Array<ITask> = [
    {
        id: 1,
        title: '牛乳を買う',
        completed: false,
        deleted: false,
    },
    {
        id: 2,
        title: '洗濯する',
        completed: false,
        deleted: false,
    },
    {
        id: 3,
        title: '結合シナリオテストケースを作成する',
        completed: false,
        deleted: false,
    },
];

const App: React.FC = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState<Array<ITask>>(initialDate);

  const handleAddTask = (newTask: ITask) => {
    setTasks(tasks.concat([newTask]));
  };

  const getNextTaskId = () => {
    return tasks.length + 1;
  };

  const handleCompleteTask = (target: ITask) => {
    const list = tasks.map(task => {
        if (task.id !== target.id) return task;
        task.completed = !task.completed;
        return task;
    });
    setTasks(list)
  };

  const handleDeleteTask = (target: ITask) => {
    const list = tasks.map(task => {
        if (task.id !== target.id) return task;
        task.deleted = !task.deleted;
        return task;
    });
    setTasks(list)
  };

  return (
    <div className={classes.root}>
        <TaskAddArea addTask={handleAddTask} getNextTaskId={getNextTaskId} />
        <TaskList tasks={tasks} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
