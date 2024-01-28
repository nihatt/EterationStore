import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/Header';
import CustomStatusBar from '../components/StatusBar';
import { setLoading } from '../../redux/loading/loadingActions';
import { fetchProducts } from '../requests/api';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store';
import MainCard from '../components/MainCard';
import { addToSharedBasket, toggleFavorite } from '../asyncStorage/storage';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';
import ListEmptyComponentFav from '../components/ListEmptyComponent';

const FavouritesPage = () => {
  const [products, setProducts] = useState([]);
  const favorites = useSelector((state) => state.favorites.favorites);
  const loading = useSelector((state) => state.loading.loading);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const initialLoad = async () => {

    store.dispatch(setLoading(true));
    console.log(loading);
    const data = await fetchProducts();
    if (typeof favorites === 'string') {
      const filteredProducts = data.filter((item) => JSON.parse(favorites).includes(item.id.toString()));
      setProducts(filteredProducts);
    }
    else {
      //filter products via items id with the numbers in favorites array
      const filteredProducts = data.filter((item) => favorites.includes(item.id.toString()));
      setProducts(filteredProducts);
    }
    store.dispatch(setLoading(false))
  }
  useEffect(() => {
    if (isFocused) {
      initialLoad();
    }
  }, [isFocused, favorites]);

  useEffect(() => {
    initialLoad();
  }, []);
  const checkFav = (id) => {
    if (favorites) {
      return favorites.includes(id.toString());
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }
  return (
    <>
      <CustomStatusBar backgroundColor="blue" barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

        <Header title="Favourites Page" />
        <FlatList
          ListEmptyComponent={<ListEmptyComponentFav></ListEmptyComponentFav>}
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <MainCard addFav={() => toggleFavorite(item.id)} addToBasket={() => addToSharedBasket(item.id, item.name, item.price, item.image, false)} isFavorite={() => checkFav(item.id)} id={item.id} title={item.name} imageSource={item.image} description={item.description}></MainCard>
          )}
          keyExtractor={(item) => item.id.toString()}
        />



      </SafeAreaView>
    </>
  );
};

export default FavouritesPage;
