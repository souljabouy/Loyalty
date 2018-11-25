import React from 'react';
import { View, StyleSheet } from 'react-native';



const Card = ({ children }) => {
        return (
            <View style={Styles.cardStyle}>
                {children}
            </View>
        )
    };

const Styles = StyleSheet.create({
    cardStyle:{
    borderRadius:10,
    borderColor:'#ddd',
    borderWidth:1,
    shadowOffset:{ width:0, height:10},
    shadowOpacity: 0.8,
    elevation:1,
    shadowRadius:2,
    justifyContent:'center',
}
})
export { Card };
