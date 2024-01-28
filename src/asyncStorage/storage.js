import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../../redux/store';
import { setFavorites } from '../../redux/favorites/favoritesActions';
import { setBasket } from '../../redux/basket/basketActions';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/loading/loadingActions';
import { setIndicator } from '../../redux/indicator/indicatorActions';
export const toggleFavorite = async (itemId) => {
  const favoriteIds = await getFavoriteIds();
  // Item id'si favoriler arasında var mı kontrol et
  const isFavorite = favoriteIds.includes(itemId);
  if (isFavorite) {
    // Eğer favorideyse, kaldır
    const newFavoriteIds = favoriteIds.filter((id) => id !== itemId);
    await AsyncStorage.setItem('favoriteIds', JSON.stringify(newFavoriteIds));
    store.dispatch(setFavorites(newFavoriteIds));
  } else {
    // Eğer favoride değilse, ekle
    const newFavoriteIds = [...favoriteIds, itemId];
    await AsyncStorage.setItem('favoriteIds', JSON.stringify(newFavoriteIds));
    store.dispatch(setFavorites(JSON.stringify(newFavoriteIds)));
    console.log("redux değeri", store.getState().favorites.favorites);

  }
};

export const getFavoriteIds = async () => {
  try {
    const value = await AsyncStorage.getItem('favoriteIds');
    if (value !== null) {
      store.dispatch(setFavorites(JSON.parse(value)));
      return JSON.parse(value);
    }
    return [];
  } catch (error) {
    console.error('Favori id\'leri alınırken bir hata oluştu:', error);
    return [];
  }
};

export const getBasket = async () => {

  try {
    
    const basketData = await AsyncStorage.getItem('basket');
    if (basketData !== null) {
      let total = 0;
      JSON.parse(basketData).forEach((item) => {
        total += item.price * item.amount;
      });
      store.dispatch(setBasket(JSON.parse(basketData)));
      store.dispatch(setIndicator(total));
  
      return JSON.parse(basketData);

    }
    return [];
  } catch (error) {
    console.error('Sepet alınırken bir hata oluştu:', error);
    return [];
  }
};


export const addToSharedBasket = async (id, name, price, minus) => {
  // Mevcut sepet durumunu alın
  const currentBasket = await getBasket();
  console.log("minus", currentBasket);
  // Eklemek istediğiniz ürünün ID'sini kontrol edin
  const productIndex = currentBasket.findIndex((basketItem) => basketItem.id === id);

  if (productIndex !== -1) {
    if (minus == 5) {
      console.log("minusa girdi");
      if(currentBasket[productIndex].amount==1)
      {
        currentBasket.splice(productIndex, 1);
      }else{
        currentBasket[productIndex].amount -= 1;
      }
     
    }
    else {
      currentBasket[productIndex].amount += 1;
    }

  } else {
    // Ürün sepette değilse, yeni bir öğe olarak ekleyin
    currentBasket.push({ id: id, name: name, price: price, amount: 1 });
  }

  // Sepeti güncelleyin ve Async Storage'e kaydedin
  try {
    console.log("minusikiii", currentBasket);
    //calculate total price
    let total = 0;
    currentBasket.forEach((item) => {
      total += item.price * item.amount;
    });
    await AsyncStorage.setItem('total', JSON.stringify(total));

    await AsyncStorage.setItem('basket', JSON.stringify(currentBasket));
    store.dispatch(setBasket(JSON.stringify(currentBasket)),setIndicator(total));
    await getBasket();
    return (JSON.stringify(currentBasket),total)
  } catch (error) {
    console.error('Sepet güncellenirken bir hata oluştu:', error);
  }
};
