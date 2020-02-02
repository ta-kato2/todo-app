import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert,Image } from 'react-native';
import TaskAddButton from './TaskAddButton';
import TaskListItem from './TaskListItem';
import Task from './model/Task';

const tasks:Task[] = [
    {
        id: 1,
        title: '牛乳を買う',
        completed: false
    },
    {
        id: 2,
        title: '牛乳をもう１つ買う',
        completed: false
    },
    {
        id: 3,
        title: '牛乳をさらに１つ買う',
        completed: true
    },
];

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});

const TaskList = (props) => {
    const moveToTaskDetailFunc = (task: Task) => {
        props.navigation.navigate('タスク詳細', {task: task});
    };

    const moveToTaskCreateFunc = () => {
       props.navigation.navigate('タスク作成', {createTask: (task: Task) => {
            console.log(task);
       }});
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <TaskListItem task={item} moveToDetail={moveToTaskDetailFunc}/>}
                keyExtractor={item => item.id.toString()}
            />
            <TaskAddButton moveToAdd={moveToTaskCreateFunc}/>
            <Image
                style={{width: 50, height: 50}}
                source={require('../assets/bonbie.jpeg')}
            />
        </View>
    );
};

export default TaskList;

