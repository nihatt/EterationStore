import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrivateButton = ({ onPress, backgroundColor, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor, padding: 10, borderRadius: 5 }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrivateButton;
