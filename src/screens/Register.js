import React, { Component } from 'react';
import {View, TextInput, Image, StyleSheet, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import {Card, CardSection, Button, Header } from '../components/common';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phnNo:'',
            error:'',
            loading: false

        }
    }

    static navigationOptions = {
        header:null
      }
    
    OnButtonPress(){
        this.setState({ loading:true, error:'' });

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
          this.case100011()
         }
        else if (responseJson.results.cmd === '100012'){
            this.case100012()
        }
        else if (responseJson.results.cmd === '100013'){
            this.case100013()
        }
        else if (responseJson.results.cmd === '100014'){
            this.case100014()
        }
        else if (responseJson.results.cmd === '100016'){
            this.case100016()
        }
        else {
           this.onLoginFail()
        }

      })
    }

    case100011(){
        this.setState({
            phnNo:'',
            loading:false,
            error:''
        })
        return (this.props.navigation.goBack())
    }
    case100012(){
        return (this.setState({
            phnNo:'',
            loading:false,
            error:'phone number required'
        }))
    }
    case100013(){
        return (this.setState({
            loading:false,
            error:'phone number should be a numeric value'
        }))
    }
    case100014(){
        return (this.setState({
            loading:false,
            error:'phone number should be 7 digits long'
        }))
    }
    case100016(){
        this.setState({
            phnNo:'',
            loading:false,
            error:'phone number is in use'
            })
    return (this.props.navigation.goBack())
    }

    onLoginFail(){
        return (this.setState({
            loading:'',
            error:'unable to create user'
        }))
    }

    renderButton(){
        if (this.state.loading){
            return <ActivityIndicator size='small' />
        }
        return (
            
            <TouchableOpacity onPress={this.OnButtonPress.bind(this)} style={styles.buttonStyle} >
                    <Text style={styles.textStyle}>
                            Register
                        </Text>
                </TouchableOpacity>
        )
    }

    render(){
        return(
                <ScrollView style={{backgroundColor:'#000', flex:1, paddingLeft:5, paddingRight:5}} >
                    <View style={{flex:1, Height:50, flexDirection:'row', alignItems:'flex-start', paddingTop:15, paddingLeft:5}}  >
                            <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                                    <Image source={ require('../Assets/arrow.png') } />
                                </TouchableOpacity>
                        </View>
                    <View style={styles.containerSection} >
                            <Image source={require('../Assets/MerakiLogo.jpg')} style={{alignSelf:'center'}} />
                        </View>
                    <View style={styles.containerSection} >
                        <TextInput
                                placeholder="phone number"
                                style={ styles.TextInputStyle }
                                value={this.state.phnNo}
                                onChangeText={phnNo => this.setState({phnNo})}
                                keyboardType="number-pad"
                                placeholderTextColor='#dbdbdb'
                                textAlign='center'
                                />
                                <Text style={{color:'#2486e2', fontSize:16, alignSelf:'center'}} > {this.state.error} </Text>
                                { this.renderButton() }              
                            </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
      flex:1,
      alignSelf: 'stretch',
      borderRadius:50,
      backgroundColor:'#383634',
      marginLeft:3,
      color:'#fff',
      fontSize:18,
      marginTop:3
    },
  
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      borderRadius: 50,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor:'#f99931'
  },
  textStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
      
  },
  containerSection: {
    flex:1,
    flexDirection: 'column',
    position: 'relative',
    paddingLeft:15,
    paddingRight:15
  
    
  }
  })

export default Register;

// <View style={{flex:1, maxHeight:10, flexDirection:'row', alignItems:'flex-start'}} >
//                         <TouchableOpacity onPress={this.props.navigation.goBack()}>
//                                 <Image source={require('../Assetes/arrow.png')} />
//                             </TouchableOpacity>
//                         </View>