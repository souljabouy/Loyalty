import React, { Component } from 'react';
import {View,KeyboardAvoidingView ,Text, TextInput, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, AsyncStorage, Alert, Image } from 'react-native';

class LogIn extends Component {
  componentWillMount(){
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
      await AsyncStorage.setItem('TOKKEN', respone1.toString())
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

  onLoginSucces( arg1, arg2){
      this.setState({
          // PhnNo:'',
          // passWord:'',
          loading:'',
          error:'Login Sucess',
          userID:arg1,
          token:arg2
        });
        this.storePassword(this.state.Password);
        this.storePhoneNumber(this.state.PhnNo);
        this.storeToken(arg2);
        this.storeUserId(arg1);
        AsyncStorage.setItem("isLoggedIn", "200")
        this.props.navigation.navigate('App');   
  }


  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
      if (this.state.loading) {
          return (
              <ActivityIndicator size={'small'} style={{paddingTop:13}}/>
            )
      }
     return (
          <Text style={styles.textStyle}>
            Log In
          </Text>
     ) 
  }

  render() {
    return(
      <ScrollView style={{backgroundColor:'#000', flex:1, paddingLeft:5, paddingRight:5}} >
        <View style={styles.containerSection} >
            <Image source={require('../Assets/MerakiLogo.jpg')} style={{alignSelf:'center'}} />
          </View>
        <View style={styles.containerSection} >
          <TextInput
              placeholder="phone number"
              style={ styles.TextInputStyle }
              value={this.state.PhnNo}
              onChangeText={PhnNo=> this.setState({PhnNo})}
              keyboardType="number-pad"
              placeholderTextColor='#dbdbdb'
              textAlign='center'

           />
          <TextInput 
              placeholder='Password'
              secureTextEntry
              style={styles.TextInputStyle}
              value={this.state.Password}
              onChangeText={Password=> this.setState({Password})}
              placeholderTextColor='#dbdbdb'
              textAlign='center'
            />
          </View>
          <Text style={{color:'#fff', fontSize:12, alignSelf:'center'}} >{this.state.error}</Text>
        <View style={styles.containerSection}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
              {this.renderButton()}
            </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.textStyle} onPress={()=>this.props.navigation.navigate('Register')} >
              Register
            </Text>
          </TouchableOpacity>
          </View>
        <View style={styles.containerSection} >
          <TouchableOpacity>
            <Text style={{color:'#2486e2', fontSize:16, alignSelf:'center'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    )}
  }
      


const styles = StyleSheet.create({
  TextInputStyle: {
    flex:1,
    alignSelf: 'stretch',
    borderRadius:50,
    backgroundColor:'#383838',
    marginLeft:3,
    color:'#fff',
    fontSize:18,
    marginTop:3
  },

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 50,
    marginTop:3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor:'#f99931',
    height:45
},
textStyle: {
    alignSelf: 'center',
    //color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    
},
containerSection: {
  flex:1,
  marginTop:5,
  justifyContent: 'space-between',
  flexDirection: 'column',
  position: 'relative',
  paddingLeft:15,
  paddingRight:15

  
}
})

export default LogIn;
