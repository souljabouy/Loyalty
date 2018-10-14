import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import {Card, CardSection, Button, Header } from '../components/common';
import { getTokken } from '../components/asyncFunctions/AsyncFunctions'

class LogIn extends Component {
  componentWillMount(){
    getTokken();
    this.getUserId();
    }

  constructor(props) {
    super(props);

      this.state = {
        PhnNo:'',
        Password: '',
        loading: false,
        error:'',
        userID:'',
        token:''
      }

  }
  static navigationOptions = {
    header:null
  }

//  componentDidUpdate() {
//    this.storePassword(this.state.passWord);
//    this.storePhoneNumber(this.state.PhnNo);
//  }

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
        phone: this.state.PhnNo,
        password: this.state.Password
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

  async storePhoneNumber(respone1){
    try{
      await AsyncStorage.setItem('PHONE', respone1)
    } catch(error){
      Alert.alert('','error  storing user phone number')
    }
  }

  async storePassword(respone1){
    try{
      await AsyncStorage.setItem('PASSWORD', respone1)
    } catch(error){
      Alert.alert('','error  storing user phone password')
    }
  }

  async storeToken(respone1){
    try{
      await AsyncStorage.setItem('TOKKEN', respone1)
    } catch(error){
      Alert.alert('','error  storing user tokken')
    }
  }

  async storeUserId(respone3){
    try{
      await AsyncStorage.setItem('USERID', JSON.stringify(respone3))
    } catch(error){
     Alert.alert('','error at storing user id')
    }
  }

  getUserId = async () => {
    try{
        let a = await AsyncStorage.getItem('USERID');
        if (a !== null){
            this.setState({userID:a})
        }
    } catch (error){
        Alert.alert('','get user error')
    }
} 

//   getTokken = async () => {
//     try{
//         let a = await AsyncStorage.getItem('TOKKEN');
//         if (a !== null){
//             this.setState({token:a})
//         }
//     } catch (error){
//         console.log(error)
//     }
// }

  onLoginSucces( arg1, arg2){
      this.setState({
          // PhnNo:'',
          // passWord:'',
          loading:'',
          error:'Login Sucess',
          userID:arg1,
          token:arg2
        });
        this.storePassword(this.state.Password),
        this.storePhoneNumber(this.state.PhnNo),
        this.storeToken(arg2)
        this.storeUserId(arg1)
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
              value={this.state.PhnNo}
              onChangeText={PhnNo=> this.setState({PhnNo})}
              keyboardType="number-pad"
              />
          </CardSection>
          <CardSection>
          <TextInput
          placeholder="password"
              secureTextEntry
              style={ styles.TextInputStyle }
              value={this.state.Password}
              onChangeText={Password=>this.setState({Password})}
            />
            </CardSection>
              <Text>
                {this.state.token}
              </Text>
              <Text>
                {this.state.PhnNo}
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

