import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskDetail = (props) => {
    return (
        <View>
            <Text>{props.route.params.task.id}</Text>
            <Text>{props.route.params.task.title}</Text>
        </View>
    );
};

export default TaskDetail;

