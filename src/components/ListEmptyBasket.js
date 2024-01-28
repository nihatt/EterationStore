import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-paper';

const ListEmptyBasket = () => {
  return (
    <View style={styles.container}>
      <LottieView
      testID='animation'
        source={require('../assets/Lottie/animateBasket.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sepetin şuan bomboş</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>niye hiçbir şey almadın :( </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default ListEmptyBasket;
