import { useIsFocused, validatePathConfig } from '@react-navigation/native';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




const SearchBar = ({ onChangeText, value }) => {
    return (
        <View style={styles.searchBar}>
            <Icon name="search" size={30} color={value ? "blue" : "gray"} />
            <TextInput
                style={styles.input}
                value={value}
                placeholder="Ürün Ara..."
                onChangeText={(text) => onChangeText(text)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
      
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        marginVertical: 8,
        borderColor: 'lightgray',
        borderRadius: 16,
        width:'80%',
        alignSelf:'center'
    },

    input: {
        padding: 5,
        fontSize: 16,
        color: '#333',
        marginLeft: 8,
    },
    searchIcon: {
        color: '#888',
        fontSize: 20,
    },
});

export default SearchBar;
