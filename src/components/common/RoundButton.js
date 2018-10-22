import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RoundButton = ({ withPress, children }) => (
            <TouchableOpacity onPress={withPress} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                   {children}
                </Text>
            </TouchableOpacity>

    );

const styles = {
    buttonStyle: {
        //flex: 2,
        alignSelf: 'center',
        backgroudColor: '#BB1111',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#BB1111',
        marginLeft: 5,
        marginRight: 5,
        height:50,
        width:50,
        alignItem:'center'


    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        
    }

};

export { RoundButton };
