import React, { useState } from 'react';
import { View, Text, Modal, Button, Touchable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
const FilterModal = ({ closeFunc, value, onChange, valuePrice, onChangePrice, onDone }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                visible={true}
                statusBarTranslucent={true}
                animationType="slide"
                transparent={true}
            >
                <View style={{ height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                </View>
                <View style={{ height: '40%', alignItems: 'center', backgroundColor: 'white', borderRadius: 30, padding: 20, borderWidth: 2 }}>
                    <View style={{ alignSelf: 'flex-end' }}>
                        <Icon name="close" size={30} color="black" onPress={() => { closeFunc() }} />
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Minimum ID {value}</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            value={value}

                            minimumValue={1}
                            step={10}
                            onSlidingComplete={(value) => { onChange(value) }}
                            onValueChange={(value) => { onChange(value) }}
                            maximumValue={80}
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#000000"
                        />
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Maximum Fiyat {valuePrice}</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            value={valuePrice}
                            minimumValue={1}
                            step={30}
                            onSlidingComplete={(valuePrice) => { onChangePrice(valuePrice) }}
                            onValueChange={(valuePrice) => { onChangePrice(valuePrice) }}
                            maximumValue={800}
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#000000"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', width: '100%' }}>
                        <TouchableOpacity onPress={() => { onChange(1), onChangePrice(800), onDone }} style={{ backgroundColor: 'red', width: '40%', height: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20, marginTop: 30 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Temizle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { onDone() }} style={{ backgroundColor: 'blue', width: '40%', height: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20, marginTop: 30 }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Filtrele</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default FilterModal;
