import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Image, StyleSheet, ScrollView } from 'react-native';
import {Header} from '../components/common'

class SettingsScreen extends React.Component {

    logOut() {
        AsyncStorage.setItem('isLoggedIn', '211');
        this.props.navigation.navigate('Auth');
    }


    render() {
        return (
            <View style={{ flex:1, backgroundColor:'#333',}} >
                <Header withPress={()=>this.props.navigation.goBack()} >
                    Settings
                </Header>

                <ScrollView style={{paddingTop:10, marginLeft:10}}>
                    <TouchableOpacity 
                        onPress={()=> this.props.navigation.navigate('SecurityScreen') } 
                        style={Styles.cardStyle}
                        >
                        <Text style={{ color:'#fff'}}>
                            Security
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.logOut.bind(this)}
                        style={Styles.cardStyle}
                        >
                        
                        <Text style={{ color:'#fff'}} >
                            LogOut
                        </Text>
                        
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    cardStyle:{
    borderBottomColor:'#ddd',
    borderBottomWidth:StyleSheet.hairlineWidth,
    justifyContent:'flex-start',
    flex:1,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:2

    }
})
export default SettingsScreen;
