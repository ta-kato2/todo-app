import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    bottom: 10
  },
});

const TaskAddButton = () => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {}}>
            <AntDesign name="pushpin" size={80} color="#0000FF" />
        </TouchableOpacity>
    );
};

export default TaskAddButton;

