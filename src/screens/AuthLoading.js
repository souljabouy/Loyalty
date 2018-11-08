import React, { Component } from 'react';
import {View, Text, AsyncStorage, Alert, Button} from 'react-native';
import {Spinner} from '../components/common';
import { Header, Card } from '../components/common';


class AuthLoading extends Component {

    static navigationOptions = {
        header:null
      }

      componentDidMount(){
        this.GetLogedIN()
        }

   GetLogedIN(){
        setTimeout(() => {
            AsyncStorage.getItem("isLoggedIn", (error, result) => {
                (result === '200') ? 
                this.props.navigation.navigate('App') : this.props.navigation.navigate('Login');
              })
          }, 1000 * 2 )
        }

        render(){
            return (
                <View style={{flex:1}} >
                    <Spinner size='large' />
                </View>
                )
            }
        }
        
        
        export default AuthLoading;

