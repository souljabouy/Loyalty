import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card } from '../components/common'

class Page2 extends Component {
    render(){
        return(
            <View>
                <Header headerText='Stores' />
                <Card Style={styles.containerStyle} >
                    <Text>This is Page 2</Text>
                </Card>
            </View>
        )
    }
}


const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height:100,
        justifyContent:'center'

    }}

export default Page2;