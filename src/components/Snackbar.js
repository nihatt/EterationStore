import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const Snack = ({ visible,onDismissSnackBar,message,onHide }) => {
  return (
    <Snackbar
    duration={6000}
    visible={visible}
    onDismiss={onHide}
    action={{
      label: 'Sepete Git',
      onPress: 
        onDismissSnackBar
  
    }}>
    {message}
  </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Snack;
