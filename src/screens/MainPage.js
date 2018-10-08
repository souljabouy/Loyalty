import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert } from 'react-native';
import { Header, Card, Button } from '../components/common'

class MainPage extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          accessToken: "hello",
          UserId:''
        }
      }

componentWillMount(){
    this.getTokken();
    this.getUserId();
}

getTokken = async () => {
    try{
        let a = await AsyncStorage.getItem('Tokken');
        if (a !== null){
            this.setState({accessToken:a})
        }
    } catch (error){
        console.log(error)
    }
}   
getUserId = async () => {
    try{
        let a = await AsyncStorage.getItem('USERID');
        if (a !== null){
            this.setState({UserId:a})
        }
    } catch (error){
        Alert.alert('','get user error')
    }
} 

render(){
        return(
            <View>
                <Header headerText='Stores' />
                <Card Style={styles.containerStyle} >
                    <Text>
                        {this.state.accessToken}
                    </Text>
                </Card>
                <Card Style={styles.containerStyle} >
                    <Text>
                        {this.state.UserId}
                    </Text>
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

export default MainPage;