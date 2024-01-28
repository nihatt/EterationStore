import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { saveFavorites } from '../asyncStorage/storage';
import { useSelector } from 'react-redux';
const MainCard = ({ title, imageSource, description, id, addFav, isFavorite,onPress,addToBasket }) => {
    const [fav, setFav] = useState(false);

    return (
        <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
            <View>
                <Image source={{ uri: imageSource }} style={styles.image} />
                <View style={{width:'30%',alignSelf:'flex-end',position: 'absolute', top: 10, bottom: 0, left: 0 }}>
                    <TouchableOpacity  onPress={() => addFav(id)}>
                        <Icon name="star"  size={30} color={isFavorite ? "red" : !fav ? "white" : "red"} />
                    </TouchableOpacity>
                </View>

            </View>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
            <Text numberOfLines={2} style={styles.description}>{description}</Text>
            <TouchableOpacity style={{ flex: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: 'blue', marginTop: 15 }} onPress= {addToBasket}>
                <Text style={{ color: 'white' }}>Sepete Ekle</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: '40%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 10,


        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 160,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        height: 50,
    },
    description: {

        fontSize: 16,
        color: '#888',
    },
});

export default MainCard;
