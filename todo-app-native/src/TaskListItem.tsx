import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Task from './model/Task';

interface Props {
    task: Task
    moveToDetail: (task: Task) => void
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
        <TouchableOpacity onPress={() => props.moveToDetail(props.task)}>
            <View style={styles.container}>
                <Text>{props.task.title}</Text>
                <Text>{props.task.completed ? "完了" : 'まだ'}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskListItem;

