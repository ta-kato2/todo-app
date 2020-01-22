import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from './CustomButton';

const TaskList = (props) => {
    return (
        <View>
            <Text>タスク一覧画面</Text>
            <Button
                title="Press me"
                onPress={() => props.navigation.navigate('タスク詳細')}
                color={'#FFAA99'}
            />
{/*             <CustomButton/> */}
        </View>
    );
};

export default TaskList;

