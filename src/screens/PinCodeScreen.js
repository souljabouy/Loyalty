import React, {Component} from 'react'
import {ScrollView, View, Text, TouchableOpacity, TextInput, AsyncStorage, Dimensions, KeyboardAvoidingView, Alert} from 'react-native'
import TouchID from 'react-native-touch-id'

const window = Dimensions.get('window');

const WIDTH = window.width;

const TOUCHIDENABLED = 'TOUCHIDENABLED'

class PinCodeScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            pin:'',
            oPin:'',
            errorText:'',
            toucheIdenabled:'201',
        }
        this.getOpin()
    }

    componentDidUpdate(){
            this.authWithTouchId()
   
    }

    getOpin = async()=>{
        const a = await AsyncStorage.getItem("PIN")
        b = await AsyncStorage.getItem(TOUCHIDENABLED)
        this.setState({ oPin:a })
        if(b === '200'){
            this.setState({toucheIdenabled:'200'})
        }else if(b !== '200'){
            this.setState({toucheIdenabled:'201'})
        }

    }

    renderError(value){
        return <Text>{value}</Text>
    }

    unlock(){
        if(this.state.pin === this.state.oPin){
            this.props.navigation.navigate('App')
        }else if(this.state.pin.length < 3){
            this.setState({pin:''})
            this.setState({errorText:'pin must be a 4 digit number'})
        }else{
            this.setState({pin:''})
            this.setState({errorText:'incorrect'})
        }
    }

    authWithTouchId(){
        if(this.state.toucheIdenabled === '200'){
            TouchID.authenticate('confirm touch ID')
            .then(success => {

                this.props.navigation.navigate('App')
            })
            .catch(error => {
                if(error.code === "AUTHENTICATION_CANCELED"){
                    this.setState({toucheIdenabled:'201'})
                }else{
                    alert.alert('failed','Authantication Failed')
                }
            });
        }
    }

    render(){
        return(
            <View style={{ flex:1, backgroundColor:'#333', justifyContent:'center', alignItems:'center', padding:10 }} >
                <KeyboardAvoidingView style={{ alignSelf:'center' }} >
                    <View style={{ borderBottomColor:'#fff', borderTopColor:'#fff', alignSelf:'center', borderWidth:0.1 }} >
                        <TextInput
                        secureTextEntry
                        placeholder='enter your pin here'
                        placeholderTextColor='#aaa'
                        maxLength={4}
                        value={this.state.pin}
                        onChangeText={ (pin)=>this.setState({ pin }) }
                        keyboardType="number-pad"
                        returnKeyType='go'
                        returnKeyLabel='unlock'
                        onSubmitEditing={()=> this.unlock() }
                        style={{ padding:7, color:'#fff', alignSelf:'center', width:WIDTH, textAlign:'center', fontSize:16 }}
                        
                        />
                    </View>
                <TouchableOpacity 
                    onPress={()=> this.unlock()}
                    style={{ alignSelf:'center' }}
                     >    
                    <Text style={{ color:'blue', padding:5, fontSize:18 }} >
                    Unlock
                    </Text>
                </TouchableOpacity>
                <Text style={{color:'red', alignSelf:'center', fontSize:10}} >{this.state.errorText}</Text>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default PinCodeScreen;