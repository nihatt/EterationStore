import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title, goBackActive }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {goBackActive && (
        <TouchableOpacity testID="back-button" style={{marginRight:20}} onPress={() => navigation.goBack()}>
         <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,

  },
  backButton: {
    color: 'white',
    fontSize: 16,
    marginRight: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
