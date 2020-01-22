import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

const CustomButton = () => {
    return (
        <Button
          title="Press me"
          onPress={() => Alert.alert('iOSやで！')}
          color={'#FF0000'}
        />
    );
};

export default CustomButton;

