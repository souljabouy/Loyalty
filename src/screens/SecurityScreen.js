import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, AsyncStorage, Alert, StyleSheet, Switch, Modal } from 'react-native';
import {Header} from '../components/common'
import TouchID from 'react-native-touch-id'

const SECURED = 'SECURED';
const PIN = 'PIN';
const TOUCHIDENABLED = 'TOUCHIDENABLED'

class SecurityScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CreatePin: false,
            Pin: '',
            Pin1:'',
            OPin: '',
            secured:'',
            modalVisible:false,
            scean:'1',
            scean1Pin:'',
            scean2Pin:'',
            scean3Pin:'',
            scean4Pin:'',
            switchOn:false,
            touchIdenabled:'201',
            switchDisabled:true,
            bioAvailable:''
        };
        this.isTouchIdEnabled()
        this.securedState()
        this.checkBioMetricsAvilability()
    }


checkBioMetricsAvilability(){
    TouchID.isSupported()
        .then(biometryType => {
            // Success code
            if (biometryType === 'FaceID') {
                this.setState({bioAvailable:'FaceID'});
                this.setState({switchDisabled:false})
            } else {
                this.setState({bioAvailable:'TouchID '});
                this.setState({switchDisabled:false})
            }
        })
        .catch(error => {
            // Failure code
            console.log(error);
        });
}

async enablingTouchId(value){
    if(value === true && this.state.touchIdenabled === '201'){
        TouchID.authenticate('confirm touch ID')
      .then(success => {
        this.enableTouchId()
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
        console.log(error);
        this.setState({ switchOn: false });
      });
    }else if(value === false){
        await AsyncStorage.setItem(TOUCHIDENABLED,'201')
        this.setState({touchIdenabled:'201'})
    }
}

async isTouchIdEnabled(){
    a = await AsyncStorage.getItem(TOUCHIDENABLED)
    if (a === '200'){
        this.setState({ touchIdenabled:'200' })
        this.setState({switchOn:true})
    }else if(a === '201'){
        this.setState({touchIdenabled:'201'})
    }else{
        this.setState({touchIdenabled:'201'})
    }

}

setModalVisible(visible) {
    this.setState({modalVisible: visible});
    }

securedState = async()=>{
    a = await AsyncStorage.getItem('SECURED')
    b = await AsyncStorage.getItem('PIN')
    if (a === '200' ){
        this.setState({OPin:b})
        this.setState({secured:'200'})
    }else{
        this.setState({Secured:'201'})
    }}

async secured(value) {
    await AsyncStorage.setItem(PIN, value);
    await AsyncStorage.setItem(SECURED, '200');
    this.setState({Secured:'200'})
}

enableTouchId = async()=>{
    await AsyncStorage.setItem(TOUCHIDENABLED, "200")
    this.setState({touchIdenabled:'200'})
    Alert.alert('Authenticated Successfully');
}

setPin() {
    if (this.state.Pin === this.state.Pin1 && this.state.Pin.length === 4) {
        this.secured(this.state.Pin);
        this.setState({secured:'200'})
        this.setState({ CreatePin: false });
        return Alert.alert('sucess');
    } else if (this.state.Pin.length !== 4) {
        Alert.alert('', 'pin must be a 4 digit long number');
    } else if (this.state.Pin !== this.state.Pin1 && this.state.Pin.length === 4) {
        Alert.alert('', "pin dosen't match");
    } else {
        Alert.alert('error saving', 'cant set your pin');
    }
}

renderCreatePin(){
    if (this.state.CreatePin === true){
        return( <View>
                    <TextInput
                    value={this.state.Pin}
                    placeholder='enter your pin here'
                    placeholderTextColor='#ddd'
                    keyboardType="numeric"
                    maxLength={4}
                    secureTextEntry
                    onChangeText={(Pin)=> this.setState({ Pin }) }
                    style={Styles.textStyle}
                    returnKeyType="next"
                    enablesReturnKeyAutomatically={true}
                    onSubmitEditing={()=>this.creatPinInput.focus() }
                    />
                    <TextInput
                        value={this.state.Pin1}
                        placeholder='comfirm your pin'
                        placeholderTextColor='#ddd'
                        keyboardType="numeric"
                        maxLength={4}
                        secureTextEntry
                        onChangeText={(Pin1)=>this.setState({ Pin1 }) } 
                        style={Styles.textStyle}  
                        ref={(input)=> this.creatPinInput = input }
                        enablesReturnKeyAutomatically={true}
                        returnKeyType='go'
                        onSubmitEditing={()=>this.setPin()}
                    />
                    <TouchableOpacity onPress={()=>this.setPin()} >
                        <Text style={Styles.textStyle} >
                            save
                        </Text>
                    </TouchableOpacity>
                </View>
                )
    }
        return( <View></View>)
      
}

alertOnPressOk(){
    this.setState({modalVisible:false})
    this.setState({scean:'1'})
    this.setState({scean1Pin:''})
    this.setState({scean2Pin:''})
    this.setState({scean3Pin:''})
    this.setState({scean4Pin:''})
}

alertText(){
    Alert.alert("Going Back!","you have unsaved data! if you go back unsaved data will be lost", [
        {text: 'OK', onPress: () =>this.alertOnPressOk() },
        {text: 'Cancel', style:'cancel'}

    ] )
}

confirmScean1(){
    if(this.state.scean1Pin === this.state.OPin){
        this.setState({scean:'2'})
        this.setState({scean1Pin:''})
    }else{
        Alert.alert('error','Wrong Pin')
    }
}

confirmScean2(){
    if (this.state.scean2Pin.length === 4) {
        this.setState({scean:'3'})
    }else{
        Alert.alert('', 'pin must be a 4 digit long number');
    }
}

confirmScean3(){
    if (this.state.scean2Pin === this.state.scean3Pin){
        this.secured(this.state.scean2Pin);
        this.setState({scean2Pin:''})
        this.setState({scean3Pin:''})
        this.setState({ modalVisible: false });
        return Alert.alert('sucess', "pin successfully updated");
    }else if (this.state.scean2Pin !== this.state.scean3Pin){
        Alert.alert('', "pin dosen't match");
    } else {
        Alert.alert('error saving', 'cant set your pin');
    }
}

async removePin(){
    await AsyncStorage.setItem(SECURED, '201')
    await AsyncStorage.setItem(PIN, '')
    this.setState({scean:'1'})
    this.setState({modalVisible:false})
    this.setState({OPin:''})
    this.setState({scean4Pin:''})
    this.setState({secured:'201'})
}

pinRemovingAlert(){
    Alert.alert('warning', "your about to remove your pin, press ok to proceed",
    [
        {text:'OK', onPress: ()=>this.removePin() },
        {text:'Cancel', style:'cancel' }
    ]
    )
}

confirmScean4(){
    if(this.scean4Pin === this.OPin){
        this.pinRemovingAlert()
    }else{
        Alert.alert('cannot confirm your pin')
    }
}

renderPinChangeSceans(){
    if(this.state.scean === '1'){
        return (
                <View style={{flex:1, alignContent:'flex-start', alignItems:'center', paddingTop:15}} >
                    <Text style={{ color:'#fff', fontSize:24 }}>enter your current pin</Text>
                    <TextInput
                        value={this.state.scean1Pin}
                        placeholder='current Pin'
                        placeholderTextColor='#ddd'
                        keyboardType="numeric"
                        maxLength={4}
                        secureTextEntry
                        onChangeText={(scean1Pin)=> this.setState({ scean1Pin }) }
                        enablesReturnKeyAutomatically={true}
                        style={[Styles.textStyle, {textAlign:'center', fontSize:20, paddingTop:15}]}
                        returnKeyType='go'
                        onSubmitEditing={()=>this.confirmScean1()}
                    />
                    <TouchableOpacity
                        onPress={() => {
                        this.confirmScean1();
                        }}>
                        <Text style={{ color:'#fff', fontSize:20 }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
        )
    }else if(this.state.scean === '2'){
        return(
            <View style={{flex:1, alignContent:'flex-start', alignItems:'center', paddingTop:15}} >
                <Text style={{ color:'#fff', fontSize:24 }}>enter your current pin</Text>
                <TextInput
                    value={this.state.scean2Pin}
                    placeholder='new Pin'
                    placeholderTextColor='#ddd'
                    keyboardType="numeric"
                    maxLength={4}
                    secureTextEntry
                    onChangeText={(scean2Pin)=> this.setState({ scean2Pin }) }
                    style={[Styles.textStyle, {textAlign:'center', fontSize:20, paddingTop:15}]}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    onSubmitEditing={()=>this.confirmScean2()}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.confirmScean2()
                    }}>
                    <Text style={{ color:'#fff', fontSize:20 }}>Next</Text>
                </TouchableOpacity>
            </View>
         )
    }else if(this.state.scean === '3'){
        return(
            <View style={{flex:1, alignContent:'flex-start', alignItems:'center', paddingTop:15}} >
                <Text style={{ color:'#fff', fontSize:24 }}>enter your current pin</Text>
                <TextInput
                    value={this.state.scean3Pin}
                    placeholder='confirm your new pin'
                    placeholderTextColor='#ddd'
                    keyboardType="numeric"
                    maxLength={4}
                    secureTextEntry
                    onChangeText={(scean3Pin)=> this.setState({ scean3Pin }) }
                    style={[Styles.textStyle, {textAlign:'center', fontSize:20, paddingTop:15}]}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    onSubmitEditing={()=>this.confirmScean3()}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.confirmScean3()
                    }}>
                    <Text style={{ color:'#fff', fontSize:20 }}>ChnagePin</Text>
                </TouchableOpacity>
            </View>
         )
    }else if(this.state.scean === '4'){
        return(
            <View style={{flex:1, alignContent:'flex-start', alignItems:'center', paddingTop:15}} >
                <Text style={{ color:'#fff', fontSize:24 }}>enter your current pin</Text>
                <TextInput
                    value={this.state.scean3Pin}
                    placeholder='confirm pin'
                    placeholderTextColor='#ddd'
                    keyboardType="numeric"
                    maxLength={4}
                    secureTextEntry
                    onChangeText={(scean3Pin)=> this.setState({ scean3Pin }) }
                    style={[Styles.textStyle, {textAlign:'center', fontSize:20, paddingTop:15}]}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    onSubmitEditing={()=>this.confirmScean4()}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.confirmScean4()
                    }}>
                    <Text style={{ color:'#fff', fontSize:20 }}>Confirm</Text>
                </TouchableOpacity>
            </View>
         )
    }
}

scean4(){
    this.setState({scean:'4'})
    return this.setState({modalVisible:true})
}

valueChangeonSwitch(value){
    this.setState({switchOn:value})
    return (
        this.enablingTouchId(value)
    )
}

renderOptions(){
    if(this.state.secured === '200'){
        return(  <View>

                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() =>this.alertText()}
                        >
                            <View style={{ flex:1, backgroundColor:'#333',}} >

                                <Header withPress={()=>this.alertText()} >
                                </Header>
                                    {this.renderPinChangeSceans()}
                            </View>
                        </Modal>

                    <View 
                        style={[Styles.cardStyle, {justifyContent:'space-between', flexDirection:'row'}]} 
                        >
                        <Text style={Styles.textStyle} >
                            Enable Touch ID or Face ID
                        </Text>
                        <Switch 
                            style={{marginTop:-7}}
                            value={this.state.switchOn}
                            onValueChange={(value)=>this.valueChangeonSwitch(value)}
                            disabled={this.state.switchDisabled}
                            />
                    </View>
                    <TouchableOpacity 
                        style={Styles.cardStyle}
                        onPress={() => {
                            this.setModalVisible(true);
                          }} 
                        >
                        <Text style={Styles.textStyle} >
                            Change Pin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Styles.cardStyle}
                        onPress={()=>this.scean4()}
                        >
                        <Text style={Styles.textStyle} >
                            Remove Pin
                        </Text>
                    </TouchableOpacity>
                </View>
                )
    }else{
        return ( 
            <View>
            {this.renderCreatePin()}
            <TouchableOpacity 
            onPress={ () => this.setState({ CreatePin: !this.state.CreatePin })}
            style={Styles.cardStyle}
            >
                <Text style={Styles.textStyle} >
                    create Pin
                </Text>
            </TouchableOpacity>
            </View>
                )
    }
}


    render() {
        {this.enablingTouchId()}
        return (
        <View  style={{ flex:1, backgroundColor:'#333',}} >
            <Header withPress={()=>this.props.navigation.goBack()} >
                Security        
            </Header>
            <View style={{paddingTop:10, marginLeft:10, flex:1}} >
                {this.renderOptions()}
            </View>
        </View>
        );
    }
}

const Styles = StyleSheet.create({
    textStyle:{
        color:'#fff'
    },
    cardStyle:{
        borderBottomColor:'#ddd',
        borderBottomWidth:StyleSheet.hairlineWidth,
        paddingTop:7,
        paddingBottom:7,
        paddingLeft:2,
    }
})
export default SecurityScreen;
