import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { Text } from 'react-native-paper';

const ListEmptyComponentFav = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/Lottie/animate.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Favoriye bir şey eklememişsin</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>belki biz bulamamışızdır.. </Text>
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

export default ListEmptyComponentFav;
