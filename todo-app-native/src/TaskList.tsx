import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Alert,Image } from 'react-native';
import TaskAddButton from './TaskAddButton';
import TaskListItem from './TaskListItem';
import Task from './model/Task';
import { SwipeListView } from 'react-native-swipe-list-view';

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
  rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
});

const TaskList = (props) => {
    const [data, setData] = useState(tasks);

    const moveToTaskDetailFunc = (task: Task) => {
        props.navigation.navigate('タスク詳細', {task: task});
    };

    const moveToTaskCreateFunc = () => {
       props.navigation.navigate('タスク作成', {createTask: (task: Task) => {
            task.id = data.length + 1;
            setData(data.concat(task));
       }});
    };

    return (
        <View style={styles.container}>
            <SwipeListView
                data={data}
                renderItem={({ item }, rowMap) => <TaskListItem task={item} moveToDetail={moveToTaskDetailFunc}/>}
                renderHiddenItem={ (data, rowMap) => (
                                        <View style={styles.rowBack}>
                                            <Text>Left</Text>
                                            <Text>Right</Text>
                                        </View>
                                 )}
                leftOpenValue={75}
                rightOpenValue={-75}
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

