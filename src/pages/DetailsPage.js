import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import CustomStatusBar from '../components/StatusBar';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addToSharedBasket, toggleFavorite } from '../asyncStorage/storage';
import Snack from '../components/Snackbar';
import { useNavigation } from '@react-navigation/native';

const DetailsPage = (props) => {
  const item = props.route.params.item;
  const [isFavorite, setIsFavorite] = useState(props.route.params.isFavorite);
  console.log("detaydaki fav ", isFavorite)
const navigation = useNavigation()
  const [fav, setFav] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
    
      <CustomStatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={styles.container}>

        <Header title={item.name} goBackActive={true} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.favoriteButtonContainer}>
          <TouchableOpacity onPress={() => { toggleFavorite(item.id), setFav(!fav), setIsFavorite(!isFavorite) }}>
            <Icon name="star" size={30} color={isFavorite ? "red" : !fav ? "gray" : "red"} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <SafeAreaView style={styles.bottomRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price:</Text>
            <Text style={styles.price}>{item.price} ₺</Text>
          </View>
          <View style={styles.addToCartButton}>
            <TouchableOpacity onPress={() => { addToSharedBasket(item.id,item.name,item.price,3).then(setVisible(true))}}>
              <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
            </TouchableOpacity>
            
          </View>
          
        </SafeAreaView>
        <Snack visible={visible} onHide={()=>setVisible(false)} onDismissSnackBar={()=>navigation.navigate("BasketPage") } message={"Ürün Sepete Eklendi"} />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '95%',
    height: '30%',
    alignSelf: 'center',
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 330,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 16,
    margin: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  priceContainer: {
    alignContent: 'flex-end',
    margin: 10,
  },
  priceLabel: {
    color: 'blue',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    alignItems: 'center',
    borderRadius: 12,

    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 200,
  },
  addToCartButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Thonburi-Bold',
  },
});

export default DetailsPage;
