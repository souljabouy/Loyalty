import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet,
                        Animated, Platform, KeyboardAvoidingView, 
                        ActivityIndicator, Text, TouchableOpacity, Dimensions,
                        Keyboard
                        } from 'react-native';
import {Header} from '../components/common'

const window = Dimensions.get('window');


const IMAGE_HEIGHT = window.width / 1.2;
const IMAGE_HEIGHT_SMALL = window.width / 2.5;

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phnNo: '',
            error: '',
            loading: false

        };
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT); 
    }

    componentWillMount() {
        if (Platform.OS === 'ios') {
         this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
         this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
        } else {
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
     

    static navigationOptions = {
        header: null
      }
    
    OnButtonPress() {
        this.setState({ loading: true, error: '' });

    fetch('http://echespos.com/jawaahiruapi/index.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cmd: '100000',
        phone: this.state.phnNo
      }),
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.results.cmd === '100011') {
          this.case100011();
         } else if (responseJson.results.cmd === '100012') {
            this.case100012();
        } else if (responseJson.results.cmd === '100013') {
            this.case100013();
        } else if (responseJson.results.cmd === '100014') {
            this.case100014();
        } else if (responseJson.results.cmd === '100016') {
            this.case100016();
        } else {
           this.onLoginFail();
        }
      });
    }

    case100011() {
        this.setState({
            phnNo: '',
            loading: false,
            error: ''
        });
        return (this.props.navigation.goBack());
    }
    case100012() {
        return (this.setState({
            phnNo: '',
            loading: false,
            error: 'phone number required'
        }));
    }
    case100013() {
        return (this.setState({
            loading: false,
            error: 'phone number should be a numeric value'
        }));
    }
    case100014() {
        return (this.setState({
            loading: false,
            error: 'phone number should be 7 digits long'
        }));
    }
    case100016() {
        this.setState({
            phnNo: '',
            loading: false,
            error: 'phone number is in use'
            });
    }

    onLoginFail() {
        return (this.setState({
            loading: '',
            error: 'unable to create user'
        }));
    }

    renderButton() {
        if (this.state.loading) {
            return <ActivityIndicator size='small' style={{ alignSelf: 'center' }} />;
        }
        return (
                    <Text style={styles.textStyle}>
                            Register
                        </Text>
                
        );
    }

    render() {
        return (
                <View style={{ backgroundColor: '#000', flex: 1, paddingLeft: 5, paddingRight: 5, flexDirection: 'column' }} >
                <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', paddingTop:10, paddingLeft:5, paggingRight:5, paddingBottom:10 }} >
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                            <Image source={require('../Assets/arrow.png')} style={{resizeMode:'contain', width:22, height:22}} />
                    </TouchableOpacity>
                    <View style={{width:22, height:22}} >
                    </View>
                    <View style={{width:22, height:22}} >
                    </View>
                </View>
                    <View style={{ Flex: 1, justifyContent: 'center', backgroundColor: '#000', alignSelf: 'center' }} >
                            <Animated.Image source={require('../Assets/MerakiLogo.png')} style={[styles.logo, { height: this.imageHeight }]} />
                        </View>

                    <View style={{ flex: 1, backgroundColor: '#000', marginTop: -20 }}>
                        
                    <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column', paddingLeft: 35, paddingRight: 35 }} behavior='padding' >
                        
                            <View style={{ borderRadius: 50, height: 45, marginTop: 8, backgroundColor: '#383838', justifyContent: 'center' }} >
                                <TextInput
                                    placeholder="phone number"
                                    style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}
                                    value={this.state.phnNo}
                                    onChangeText={phnNo => this.setState({ phnNo })}
                                    keyboardType="number-pad"
                                    placeholderTextColor='#dbdbdb'
                                    textAlign='center'
                                />
                        </View>
                        <Text style={{ color: '#2486e2', fontSize: 12, alignSelf: 'center' }} >{this.state.error}</Text>
                        
                            <TouchableOpacity onPress={() => this.OnButtonPress()} style={{ borderRadius: 50, height: 45, marginTop: 7, backgroundColor: '#AF690E', justifyContent: 'center', alignitems: 'center' }} >
                            {this.renderButton()}
                            </TouchableOpacity>             
                    
                    </KeyboardAvoidingView>

                    </View>
                    
                </View>
        );
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
      flex: 1,
      alignSelf: 'stretch',
      borderRadius: 50,
      backgroundColor: '#383634',
      color: '#fff',
      fontSize: 16,
      marginTop: 3
    },
  
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      borderRadius: 50,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor: '#f99931'
  },
  textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      
  },
  containerSection: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15
  
    
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center'
  },

  });

export default Register;

