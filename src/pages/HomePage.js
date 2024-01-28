import React, { useEffect, useState } from 'react';
import { View, Text, Touchable, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CustomStatusBar from '../components/StatusBar';
import { fetchProducts } from '../requests/api';
import store from '../../redux/store';
import { setLoading } from '../../redux/loading/loadingActions';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Badge } from 'react-native-paper';
import MainCard from '../components/MainCard';
import { addToSharedBasket, getBasket, getFavoriteIds, toggleFavorite } from '../asyncStorage/storage';
import { setFavorites } from '../../redux/favorites/favoritesActions';
import FilterModal from '../components/FilterModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snack from '../components/Snackbar';
const HomePage = ({ navigation }) => {
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [favoriteIds, setFavoriteIds] = useState([]);
    const loading = useSelector((state) => state.loading.loading);
    const favorites = useSelector((state) => state.favorites.favorites);
    const [isFilterApplied, setIsFilterApplied] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [minId, setMinId] = useState(1);
    const [maxPrice, setMaxPrice] = useState(800);
    const [visible, setVisible] = useState(false);
    let favId = [];
    let basket = [];
    const dispatch = useDispatch();
    const initialLoad = async () => {

        store.dispatch(setLoading(true));
        const data = await fetchProducts();
        setProducts(data);
        basket = await getBasket();

        favId = await getFavoriteIds()
        dispatch(setFavorites(favId));
        setFavoriteIds(favId);
        store.dispatch(setLoading(false));
    }
    useEffect(() => {
        const temp = store.getState().favorites.favorites
        console.log("temp", temp);
        dispatch(setFavorites(temp));
    }
        , [loading]);

        useEffect(() => {
            if(minId!=1 || maxPrice!=800){
                console.log("minId", minId);
                console.log("maxPrice", maxPrice);
                setIsFilterApplied(true);
                setFilteredProducts(products.filter((item) =>

                item.id >= minId && item.price <= maxPrice
            ));
            }
            else{
                setFilteredProducts(products);
                setIsFilterApplied(false);
            }


        }, [isModalVisible]);

    useEffect(() => {
        initialLoad();

    }, []);


    const checkFav = (id) => {
        if (favorites) {
            return favorites.includes(id.toString());
        }
        else {
            return favoriteIds.includes(id.toString());
        }
    }

    const filterItemsByName = (items, text) => {
        // Eğer arama metni boşsa, bütün itemleri listele
        if (text.length<=1) {
            setFilteredProducts([]);

        }
        else{
            setFilteredProducts(items.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase()))
        );
        }

    };



    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        )
    }
    return (
        <>
            <CustomStatusBar backgroundColor={'blue'} barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1 }}>
                <Header title="Eteration Store" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <SearchBar value={search} onChangeText={(text) => { setSearch(text), filterItemsByName(products, search) }} />

                    <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{ backgroundColor: 'blue', width: '10%', height: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20 }}>

                        <Icon name="filter" size={30} color="white" />
                        {isFilterApplied && <Badge style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'red' }}>1</Badge>}
                    </TouchableOpacity>
                </View>
                {isModalVisible && <FilterModal onDone={()=>setIsModalVisible(false)} valuePrice={maxPrice} onChangePrice={(price)=>setMaxPrice(price)} value={minId} onChange={(id)=>setMinId(id)} closeFunc={() => { setIsModalVisible(false) }}></FilterModal>}
                <FlatList
                    data={filteredProducts.length > 0 ? filteredProducts : products}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <MainCard onPress={() => navigation.navigate("DetailsPage", { item: item, isFavorite: checkFav(item.id) })} isFavorite={checkFav(item.id)} addFav={() => toggleFavorite(item.id)} addToBasket={() => addToSharedBasket(item.id, item.name, item.price, item.image, false).then(setVisible(true))} id={item.id} title={item.name} imageSource={item.image} description={item.description}></MainCard>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

            </SafeAreaView>
        <Snack visible={visible} onHide={()=>setVisible(false)} onDismissSnackBar={()=>navigation.navigate("BasketPage") } message={"Ürün Sepete Eklendi"} />
            
        </>
    );
};

export default HomePage;
