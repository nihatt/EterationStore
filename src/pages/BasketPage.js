import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/loading/loadingActions';
import { ActivityIndicator } from 'react-native-paper';
import CustomStatusBar from '../components/StatusBar';
import Header from '../components/Header';
import ListEmptyBasket from '../components/ListEmptyBasket';
import BasketCard from '../components/BasketCard';
import { addToSharedBasket, getBasket } from '../asyncStorage/storage';
import store from '../../redux/store';
import { useIsFocused } from '@react-navigation/native';

const BasketPage = () => {
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [products, setProducts] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const indicator = useSelector((state) => state.indicator);
const isFocused = useIsFocused();
  const initialLoad = async () => {
   
    await getBasket();
    if (typeof basket === 'string') {
      setProducts(JSON.parse(basket));
    }
    else {
      setProducts(basket);
    }
    
  }


  const buttonPress = async (id, name, price, minus) => {
    store.dispatch(setLoading(true));
    const newBasket = await addToSharedBasket(id, name, price, minus)
    setProducts(newBasket);
    setFlag(!flag)
    store.dispatch(setLoading(false));
  }

  useEffect(() => {
    initialLoad();
  }, []);
  useEffect(() => {
    initialLoad();
  }, [flag]);
  useEffect(() => {
    if(isFocused){
      initialLoad();
    }
  }, [isFocused]);

  if (loading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#0000ff" />

      </View>
    )
  }

  return (
    <>
      <CustomStatusBar backgroundColor="blue" barStyle="light-content" />
      <Header title="Sepetim" goBackActive={false} />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ListEmptyComponent={<ListEmptyBasket></ListEmptyBasket>}
          data={products}
          renderItem={({ item }) => <BasketCard key={item.id} onPressMinus={() => { buttonPress(item.id, item.name, item.price, 5) }} onPressPlus={() => { buttonPress(item.id, item.name, item.price, 3) }} id={item.id} image={item.image} name={item.name} price={item.price} amount={item.amount} />}
          keyExtractor={(item) => item.id}
        />
        <View style={{ flexDirection: 'row', height: '15%', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
          <View style={{ paddingLeft: 10, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: '400', color: 'blue', fontFamily: 'arial' }}>Toplam Tutar:</Text>

            <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold' }}>{indicator.indicator} TL</Text>
          </View>
          <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: 'blue', width: '120%', height: '60%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 40 }}>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Satın Al</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

    </>
  );
};

export default BasketPage;
