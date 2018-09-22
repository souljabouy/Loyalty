import React, { Component } from 'react';
import {View, TextInput, Alert, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import {Card, CardSection, Button, Header } from '../components/common';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phnNo:'',
            error:'',
            loading: false,

        }
    }
    registerOnButtonPress(){
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
        return Alert.alert('', 'User Created')
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
        return (this.setState({
            phnNo:'',
            loading:false,
            error:'phone number is in use'
        }))
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
            <Button withPress={ this.registerOnButtonPress.bind(this) } >Create User</Button>
        )
    }

    render(){
        return(
            <ScrollView>
        <Header headerText='Register' />
        <Card>
          <CardSection >
            <TextInput
               placeholder="phone number"
              style={ styles.TextInputStyle }
              value={this.state.phnNo}
              onChangeText={phnNo => this.setState({phnNo})}
              keyboardType="number-pad"
            />
          </CardSection>
        </Card>
        <View style={{paddingTop:10}}>
            <Text> {this.state.error} </Text>
          <CardSection >
            { this.renderButton() }
          </CardSection>
       </View>
       
      </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
      height:50,
      width: '100%'
    }
  })

export default Register;