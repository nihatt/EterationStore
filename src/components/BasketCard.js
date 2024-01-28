import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const BasketCard = ({  name, price, amount,id,onPressPlus,onPressMinus }) => {
  return (
    <View style={styles.container}>
    
      <View style={styles.middleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price} ₺</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={onPressMinus} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.amountView}>
        <Text style={styles.amount}>{amount}</Text>
        </View>
        <TouchableOpacity onPress={onPressPlus} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
    amountView:{
        padding:5,
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2A59FE',

    },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  middleContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'blue',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default BasketCard;
