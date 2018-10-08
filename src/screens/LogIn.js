import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import {Card, CardSection, Button, Header } from '../components/common';

class LogIn extends Component {


  constructor(props) {
    super(props);

      this.state = {
        phnNo:'',
        passWord: '',
        loading: false,
        error:'',
        userId:'',
        token:''
      }

  }
  static navigationOptions = {
    header:null
  }

  onButtonPress(){
    this.setState({ loading:true, error:'' });
    fetch('http://echespos.com/jawaahiruapi/index.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: '102000',
        phone: this.state.phnNo,
        password: this.state.passWord
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.cmd === '102011') {
          this.onLoginSucces(responseJson.data.user_id, responseJson.data.token)
        }
        else {
           this.onLoginFail()
        }

      }
   )
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

  onLoginSucces( arg1, arg2){
      this.setState({
          phnNo:'',
          passWord:'',
          loading:'',
          error:'Login Sucess',
          userId:arg1,
         token:arg2
        });
        this.storeToken(arg1);
        this.storeUserId(arg2);
        this.props.navigation.navigate('App');   
  }


  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
      if (this.state.loading) {
          return <ActivityIndicator size={'small'} />
      }
     return (
        <Button withPress={this.onButtonPress.bind(this)} >Log In</Button>
     ) 
  }

  render() {
    return(
      <View >     
      <Header headerText='Login' />
        <ScrollView>
        <View  style={{height:100, flex:1}} />
        <Card Style={styles.containerStyle}>
        <CardSection >
        <TextInput
        placeholder="phone number"
              style={ styles.TextInputStyle }
              value={this.state.phnNo}
              onChangeText={phnNo=> this.setState({phnNo})}
              keyboardType="number-pad"
              />
          </CardSection>
          <CardSection>
          <TextInput
          placeholder="password"
              secureTextEntry
              style={ styles.TextInputStyle }
              value={this.state.passWord}
              onChangeText={passWord=>this.setState({passWord})}
            />
            </CardSection>
            <Text>
              {this.state.token}
            </Text>
            </Card>
            <View style={{marginTop:10}}>
            <CardSection >
            {this.renderButton()}
            </CardSection>
            <CardSection>
              <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('Register')}}>
              <Text style={styles.textStyle}>
              Register
              </Text>
              </TouchableOpacity> 
            </CardSection>
            </View>
            </ScrollView>
          </View>
          )
        }
}


const styles = StyleSheet.create({
  TextInputStyle: {
    height:50,
    width: '100%'
  },
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
    marginTop: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    //backgroudColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,


},
textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
}
})

export default LogIn;

