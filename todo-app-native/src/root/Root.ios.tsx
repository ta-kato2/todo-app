import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import TaskList from '../TaskList';
import TaskDetail from '../TaskDetail';
import TaskCreate from '../TaskCreate';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Root = () => {
  return (
   <NavigationNativeContainer>
        <Stack.Navigator>
          <Stack.Screen name="タスク一覧" component={TaskList} />
          <Stack.Screen name="タスク詳細" component={TaskDetail} />
          <Stack.Screen name="タスク作成" component={TaskCreate} />
        </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Root;
