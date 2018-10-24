import React, { Component } from 'react';
import {View, ScrollView, KeyboardAvoidingView,Dimensions,
                            Text, TextInput, StyleSheet, Animated, Keyboard, Platform, ActivityIndicator, 
                            TouchableOpacity, 
                            AsyncStorage, Alert, Image, } from 'react-native';

const window = Dimensions.get('window');


const IMAGE_HEIGHT = window.width/1.2;
const IMAGE_HEIGHT_SMALL = window.width / 2.5;

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
        token:'',
        modalVisible:false
      }
      this.imageHeight = new Animated.Value(IMAGE_HEIGHT); 

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

  componentWillMount () {
   if (Platform.OS=='ios'){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
   }else{
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
   }

  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  setModalVisible(visible){
    this.setState({modalVisible: visible })
  }

  render() {
    return(
      <View style={{backgroundColor:'#000', flex:1, paddingLeft:5, paddingRight:5}} >

        <View style={{Flex:1, justifyContent:'center', backgroundColor:'#000'}} >
          <Animated.Image source={require('../Assets/MerakiLogo.jpg')} style={[styles.logo, {height:this.imageHeight}]} />
        </View>

        <View style={{flex:1, backgroundColor:'#000', marginTop:-15}}>
        <KeyboardAvoidingView style={{ flex:1, justifyContent:'center', alignContent:'center', paddingLeft:35, paddingRight:35 }} behavior='padding' >

          <View style={{  borderRadius:50, height:45, backgroundColor:'#383838' }} >
            <TextInput
                placeholder="phone number"
                style={{ color:'#ccc', fontSize:18 }}
                value={this.state.PhnNo}
                onChangeText={PhnNo=> this.setState({PhnNo})}
                keyboardType="number-pad"
                placeholderTextColor='#dbdbdb'
                textAlign='center'

                />
          </View>

          <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838'}} >
            <TextInput 
              placeholder='Password'
              secureTextEntry
              style={{ color:'#ccc', fontSize:18  }}
              value={this.state.Password}
              onChangeText={Password=> this.setState({Password})}
              placeholderTextColor='#dbdbdb'
              textAlign='center'
            />
          </View>

          <Text style={{color:'#fff', fontSize:12, alignSelf:'center'}} >{this.state.error}</Text>
          
            
              <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:7, backgroundColor:'#AF690E', justifyContent:'center', }} onPress={this.onButtonPress.bind(this)} >
                  {this.renderButton()}
              </TouchableOpacity>
            
            
              <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:5, backgroundColor:'#AF690E', justifyContent:'center', }}  onPress={()=>this.props.navigation.navigate('Register')}  >
                <Text style={styles.textStyle} >
                  Register
                </Text>
              </TouchableOpacity>
            

            
              <TouchableOpacity onPress={()=> this.setModalVisible(true) } >
                <Text style={{color:'#2486e2', fontSize:16, alignSelf:'center', marginTop:6}}>
                    Forgot Password?
                  </Text>
              </TouchableOpacity>
            

        </KeyboardAvoidingView>
        </View>
      </View>
    )}
  }
      


const styles = StyleSheet.create({
  logo:{
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },
textStyle: {
    alignSelf: 'center',
    color: '#ccc',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    
}
})

export default LogIn;
