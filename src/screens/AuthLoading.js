import React, { Component } from 'react';
import {View, AsyncStorage,} from 'react-native';
import {Spinner} from '../components/common';
import HandleBack from './Back'
const SECURED = 'SECURED'
class AuthLoading extends Component {

      componentDidMount(){
        this.GetLogedIN()
        }


    a = null;

   getValue = async () => {
    try {
        a = await AsyncStorage.getItem('isLoggedIn')
        b = await AsyncStorage.getItem('SECURED');
        if (a === '200' && b === '200') {
            this.props.navigation.navigate('PinCodeScreen')
        }else if (a === '200' && b !== '200'){
            this.props.navigation.navigate('App')
        }else{
          this.props.navigation.navigate('Login')
        }
    } catch (error) {
        console.warn(error);
    }   
}

   GetLogedIN(){
        setTimeout(() => {
            this.getValue()
          }, 1000 * 2 )
        }
    onBack = () => {
        BackHandler.exitApp()
        return true
        }
        render(){
            return (
                <HandleBack onBack={this.onBack} >
                    <View style={{flex:1}} >
                        <Spinner size='large' />
                    </View>
                </HandleBack>
                )
            }
        }
        
        
        export default AuthLoading;
