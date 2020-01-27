import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CustomButton from './CustomButton';
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

const TaskList = (props) => {
    return (
        <View>
            <Text>タスク一覧画面</Text>
            <FlatList
                    data={tasks}
                    renderItem={({ item }) => <TaskListItem task={item}/>}
                    keyExtractor={item => item.id.toString()}
                  />
            <Button
                title="Press me"
                onPress={() => props.navigation.navigate('タスク詳細')}
                color={'#FFAA99'}
            />
        </View>
    );
};

export default TaskList;

