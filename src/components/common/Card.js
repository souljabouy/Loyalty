import React from 'react';
import { View } from 'react-native';



const Card = ({ Style, children }) => {
        return (
            <View style={Style}>
                {children} 
            </View>
        )
    };
export { Card };
