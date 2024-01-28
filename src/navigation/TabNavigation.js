import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'; // Kullanmak istediğiniz ikon kitaplığını içe aktarın
import FavouritesPage from '../pages/FavouritesPage';
import BasketPage from '../pages/BasketPage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomePage from '../pages/HomePage';
import { useSelector } from 'react-redux';



const Tab = createMaterialBottomTabNavigator();


const TabNavigation = ({ }) => {
  const favorites = useSelector((state) => state.favorites);
  const basket = useSelector((state) => state.basket);
  const [favCount, setFavCount] = React.useState(0);
 const [basketCount, setBasketCount] = React.useState(0);

  useEffect(() => {
    const favoritesArray = favorites.favorites;
    const basketArray = basket.basket;
    if (typeof favoritesArray === 'string') {
      setFavCount(JSON.parse(favoritesArray).length);
    }
    else {
      setFavCount(favoritesArray.length);
    }
    if(typeof basketArray === 'string'){
      console.log("string basket");
      setBasketCount(JSON.parse(basketArray).length);
    }
    else{
      setBasketCount(basketArray.length);
    }
  }, [favorites,basket]);

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "white" }}
      activeColor='blue'
      inactiveColor='gray'>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{

          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouritesPage"
        component={FavouritesPage}
        options={{
          tabBarBadge: favCount,
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="BasketPage"
        component={BasketPage}
        options={{
          tabBarBadge: basketCount,
          tabBarIcon: ({ color }) => (
            <Icon name="basket-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
