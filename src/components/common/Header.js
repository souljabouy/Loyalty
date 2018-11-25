import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const Width = window.width

const Header = ({children, withPress}) => {

    return (
        <View style={{ flexDirection: 'row', borderBottomColor:'#ddd', borderBottomWidth:StyleSheet.hairlineWidth, justifyContent:'space-between', alignItems:'center', padding:10 }} >
            <TouchableOpacity onPress={withPress} >
                    <Image source={require('../../Assets/arrow.png')} style={{resizeMode:'contain', width:22, height:22}} />
            </TouchableOpacity>
            <Text style={{ fontSize:24, color:'#ddd'}} >
            {children}
            </Text>
            <View style={{width:22, height:22}} >
            </View>
        </View>
        );
};


export { Header };

