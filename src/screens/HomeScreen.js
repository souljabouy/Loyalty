import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, StyleSheet, Image,
                ListView, TouchableOpacity } from 'react-native';
import { Header, Card, Button, CardSection, RoundButton 
            } from '../components/common';




class HomeScreen extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            accessToken: "hello",
            UserId:'',
            points:1548,
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
                <View style={{flex:1, backgroundColor:'#AF690E', flexDirection:'column', justifyContent:'center'}} >
                    <Image source={require('../Assets/Coffee.png')} style={{alignSelf:'center'}} />
                    <Text style={{fontSize:26, color:'#fff', alignSelf:'center'}} >
                            {this.state.points}
                        </Text>
                    </View>



            </View>
            )
        }
    }

            
const styles = StyleSheet.create({
    ViewStyle: {
        flex:1,
        backgroundColor:'#282828'
    }
})
export default HomeScreen;