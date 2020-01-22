import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

const CustomButton = () => {
    return (
        <Button
          title="Press me"
          onPress={() => Alert.alert('Androidやで！')}
          color={'#0000FF'}
        />
    );
};

export default CustomButton;

