import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

const CustomButton = () => {
    return (
        <Button
          title="Press me"
          onPress={() => console.log('WEB')}
          color={'#00FF00'}
        />
    );
};

export default CustomButton;

