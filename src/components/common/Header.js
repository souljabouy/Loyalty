import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        backgroundColor: '#d4d4d4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
        borderRadius: 5,
        marginBottom: 15
    },
    textStyle: {
        fontSize: 25
    }
};


export { Header };
