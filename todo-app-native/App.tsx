import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import TaskList from './src/TaskList';
import TaskDetail from './src/TaskDetail';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationNativeContainer>
        <Stack.Navigator>
          <Stack.Screen name="タスク一覧" component={TaskList} />
          <Stack.Screen name="タスク詳細" component={TaskDetail} />
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
