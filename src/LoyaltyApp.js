import React, { Component } from 'react';
import {View, Text, TextInput, Alert, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import {Card, CardSection, Button, Header } from './components/common';

class LoyaltyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phnNo:'',
      passWord: '',
      loading: false,
      error:''
    }

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
        phone: this.state.phnNo,
        password: this.state.passWord
      }),
    }).then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.results.cmd === '102011') {
          this.onLoginSucces()
        }
        else {
           this.onLoginFail()
        }

      })
  }
  onLoginSucces(){
      this.setState({
          phnNo:'',
          passWord:'',
          loading:'',
          error:''
      })
      return Alert.alert('', 'Login Successful')
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
      <ScrollView>
        <Header headerText='Login' />
        <Card>
          <CardSection >
            <TextInput
              style={ styles.TextInputStyle }
              value={this.state.phnNo}
              onChangeText={phnNo=> this.setState({phnNo})}
              keyboardType="number-pad"
            />
          </CardSection>
          <CardSection>
            <TextInput
              secureTextEntry
              style={ styles.TextInputStyle }
              value={this.state.passWord}
              onChangeText={passWord=>this.setState({passWord})}
            />
          </CardSection>
          <Text>
          {this.state.error}
        </Text>
        </Card>
        <View style={{marginTop:10}}>
          <CardSection >
            {this.renderButton()}
          </CardSection>

          <CardSection children= {<Button>Register</Button>} />
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

export default LoyaltyApp;
