import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class SettingsScreen extends React.Component{

    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                    <Text>
                        Go Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  >
                    <Text>
                        LogOut
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SettingsScreen;