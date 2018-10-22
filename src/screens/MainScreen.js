import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, StyleSheet, Image,
                ListView, TouchableOpacity } from 'react-native';
import { Header, Card, Button, CardSection, RoundButton 
            } from '../components/common';




class MainScreen extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            accessToken: "hello",
            UserId:'',
            points:'',
            asof:'',
            outletId:'1',
            lastredpiont:'',
            lastreddate:''
        }
      }
static navigationOptions = {
        header:null
      }

componentWillMount(){
    this.getTokken();
    //this.getUserId();
    this.getUserId();
}

logOut(){
        AsyncStorage.setItem("isLoggedIn", "211")
        this.props.navigation.navigate('Auth');
    }

getTokken = async () => {
    try{
        let a = await AsyncStorage.getItem('Tokken');
        if (a !== null){
            this.setState({accessToken:a})
        }
    } catch (error){
        console.log(error)
    }
}   
getUserId = async () => {
    try{
        let a = await AsyncStorage.getItem('USERID');
        if (a !== null){
            this.setState({UserId:a})
        }
    } catch (error){
        Alert.alert('','get user error')
    }
} 
render(){
        return(
            <View style={styles.ViewStyle}>
                <View style={{height:500, backgroundColor:'#AF690E', flexDirection:'column', justifyContent:'center'}} >
                    <Image source={require('../Assets/Coffee.png')} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:26, color:'#fff', alignSelf:'center'}} >
                            1258
                        </Text>
                    </View>


                <View style={{flexdirectioni:'row'}}>
                <View>
                    <View style={{flexDirection:'row',  justifyContent:'space-between', marginLeft:30, marginRight:30, marginTop:-35}}>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')} >
                                    <Image source={require('../Assets/contacts.png')}  />
                                </TouchableOpacity>
                        </View>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('History')} >
                                    <Image source={require('../Assets/history.png')}  />
                                </TouchableOpacity>
                            </View>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('FreeItems')} >
                                    <Image source={require('../Assets/freeCoffee.png')}  />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                <View>
                    <View style={{flexDirection:'row',  justifyContent:'space-between', marginLeft:30, marginRight:30, marginTop:15}}>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('RedeemScreen')} >
                                    <Image source={require('../Assets/add-list-48(white).png')}  />
                                </TouchableOpacity>
                        </View>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('BillClaim')} >
                                    <Image source={require('../Assets/barcode-48(white).png')}  />
                                </TouchableOpacity>
                            </View>
                        <View style={{borderRadius:100, backgroundColor:'#333', width:80, height:80, justifyContent:'center', alignItems:'center', borderWidth:2, borderColor:'#e6e6e6'}}>
                            <TouchableOpacity onPress={this.logOut.bind(this)} >
                                    <Image source={require('../Assets/logout-48(white).png')}  />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                </View>
            )
        }
    }

            
const styles = StyleSheet.create({
    ViewStyle: {
        flex:1
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
        marginTop: 10,
        height:100,
        justifyContent:'center',
        flex:1

    }}
)
export default MainScreen;