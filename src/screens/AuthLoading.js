import React, { Component } from 'react';
import {View, Text, AsyncStorage, Alert, Button} from 'react-native';
import {Spinner} from '../components/common';
import { Header, Card } from '../components/common';

class AuthLoading extends Component {

    static navigationOptions = {
        header:null
      }

    constructor(props){
        super(props);
    
        this.state = {
            Password: '',
            PhnNo:''
        }
      }
componentWillMount(){
    //this.AuthLoading()
    this.getPassword(),
    this.getPhoneNumber()    
}

AuthLoading(){  
    fetch('http://echespos.com/jawaahiruapi/index.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cmd: '102000',
            phone: this.state.PhnNo,
            password: this.state.Password
        }),
    }).then((response) => response.json()       
    )
        .then((responseJson) =>{
           Alert.alert('',responseJson.results.cmd)
           if (responseJson.results.cmd === '102011') {  
               this.onAuthSucces(responseJson.data.user_id, responseJson.data.token)
           }
           else {
               this.onAuthFail()
            } 
       })
       .catch((error)=> Alert.alert(error,'network error') )
}

async getPassword(){
    try{
        let a = await AsyncStorage.getItem('PASSWORD');
        if (a !== null ){
            //return (a)
            this.setState({Password:a})
        }
    }catch (error){
        Alert.alert('','cant get password')
    }
}

async getPhoneNumber(){
    try{
        let a = await AsyncStorage.getItem('PHONE');
        if (a !== null){
            //return a
            this.setState({ PhnNo:a })
        }
    } catch (error){
        Alert.alert('','cant get phn no')
    }
}

async storeToken(respone1){
    try{
      await AsyncStorage.setItem('TOKKEN', respone1)
    } catch(error){
      Alert.alert('','tokken store fail sfter success')
    }
  }
  
  async storeUserId(respone1){
      try{
          await AsyncStorage.setItem('USERID', JSON.stringify(respone1))
        } catch(error){
            Alert.alert(error,'user store fail after success')
        }
    }
    
    onAuthSucces(arg1, arg2){
        this.storeUserId(arg1);
        this.storeToken(arg2);
        this.props.navigation.navigate('App');
    }
    
    onAuthFail(){
        //Alert.alert('', 'password: ' + this.state.Password)
        this.props.navigation.navigate('Login')
    }
    
    render(){
        this.AuthLoading()
        return (
            <View style={{flex:1}} >
            <Button onPress= {()=>this.props.navigation.navigate('Login')} title ='press me' />
            </View>
            )
        }
}


export default AuthLoading;