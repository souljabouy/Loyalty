import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import {Card, CardSection, Button, Header } from './components/common';

class LoyaltyApp extends Component {
    state = { phnNo:'', passWord: ''}

  onButtonPress (){
        const { phnNo, passWord } = this.state;
             return fetch('http://echespos.com/jawaahiruapi/index.php'),{
                    method:'POST',
                    headers: { Accept: 'application/json', 'Content-Type':'application/json' },
                    body: JSON.stringify({cmd:'102000', phone:phnNo, password:passWord })
                }.then((response) => response.json()).then((responseJson) => console.log(responseJson))
  }


    render() {
        return(
            <View>
            <Header headerText='Login' />
            <Card>             
                    <CardSection >
                    <TextInput 
                        style={ styles.TextInputStyle }
                        value={this.state.phnNo}
                        onChangeText={phnNo=> this.setState({phnNo})}
                    
                    />
                    </CardSection>
                    <CardSection>
                    <TextInput 
                        style={ styles.TextInputStyle }
                        value={this.state.passWord}
                        onChangeText={passWord=>this.setState({passWord})}
                        
                        />
                    </CardSection>
            </Card>
                <View style={{marginTop:10}}>
                <CardSection children= {<Button withPress={this.onButtonPress.bind(this)} >Log In</Button>} />
                <CardSection children= {<Button>Register</Button>} />
                 </View>
    
    
        </View>
        )
    }
}


const styles = {
    TextInputStyle: {
        height:50,
        width: '100%'
    }
}

export default LoyaltyApp;




