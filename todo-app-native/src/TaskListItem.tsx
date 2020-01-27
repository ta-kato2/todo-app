import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Task from './model/Task';

interface Props {
    task: Task
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10
  },
});

const TaskListItem:React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>{props.task.title}</Text>
            <Text>{props.task.completed ? "完了" : 'まだ'}</Text>
        </View>
    );
};

export default TaskListItem;

