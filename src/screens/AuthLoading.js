import React, { Component } from 'react';
import {View, Text, AsyncStorage, Alert} from 'react-native';
import {Spinner} from '../components/common';
import { Header, Card, Button } from '../components/common';


class AuthLoading extends Component {

    static navigationOptions = {
        header:null
      }

    constructor(props){
        super(props);
    
        this.state = {
          accessToken: "fg",
          UserId:''
        }
      }

componentWillMount(){
    this.getTokken();
    this.getUserId();
}

componentDidMount(){
        fetch('http://echespos.com/jawaahiruapi/index.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cmd: '103000',
                user_id: this.state.UserId,
                token: this.state.accessToken
            }),
        }).then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.results.cmd === '103011') {   
                this.onAuthSucces(responseJson.data.user_id, responseJson.data.token)
            }
            else {
                this.onAuthFail()
            }
            
        }
        )
        .catch((error)=> Alert.alert(error,'authantication fail,network error') )
    }

async getTokken(){
    try{
        let a = await AsyncStorage.getItem('Tokken');
        if (a !== null ){
            this.setState({accessToken:a})
        }
    }catch (error){
        Alert.alert('','no Tokken')
    }
}

async getUserId(){
    try{
        let a = await AsyncStorage.getItem('USERID');
        if (a !== null){
            this.setState({ UserId:a })
        }
    } catch (error){
        Alert.alert('','no userid')
    }
}

async storeToken(respone1){
    try{
      await AsyncStorage.setItem('Tokken', respone1)
    } catch(error){
      console.log(error)
    }
  }

async storeUserId(respone1){
    try{
      await AsyncStorage.setItem('UserId', respone1)
    } catch(error){
      console.log(error)
    }
  }

  onAuthSucces(arg1, arg2){
    this.storeUserId(arg1);
    this.storeToken(arg2);
    this.props.navigation.navigate('App');
}

onAuthFail(){
    Alert.alert('', 'network error');
}
      
    render(){
        return(
            <View style={{flex:1}} >
                <Card>
                    <Text>
                        {this.state.UserId}
                    </Text>
                </Card>
                <Spinner size='large' />
                <Button withPress={()=> this.props.navigation.navigate('Auth') }/>
            </View>
        )
    }
}


export default AuthLoading;