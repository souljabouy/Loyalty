import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import React from 'react';
import {Image, StyleSheet, View } from 'react-native'
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthLoading from './screens/AuthLoading';
import FreeItems from './screens/FreeItems';
import RedeemScreen from './screens/RedeemScreen';
import History from './screens/History';
import BillClaim from './screens/BillClaim';
import SettingsScreen from './screens/SettingsScreen';
import OffersScreen from './screens/OffersScreen'
import SecurityScreen  from './screens/SecurityScreen';
import PinCodeScreen from './screens/PinCodeScreen'


const AuthStack = createStackNavigator({
    AuthLoading,
    Login: LogIn,
    Register,
    PinCodeScreen
    },
        {
            navigationOptions:{
            initialRouteName: 'AuthLoading',
            header:null
        }
    }
    );
 
   
const OffersStack = createStackNavigator({
    OffersScreen,
    FreeItems,
    RedeemScreen
    },{
        initialRouteName:'OffersScreen',
        navigationOptions:{
            header:null
        }
    }
);

const ProfileStack = createStackNavigator({
    ProfileScreen,
    SettingsScreen,
    SecurityScreen
},
{
    navigationOptions: {
        header: null
    }
});

const AppStack = createBottomTabNavigator({ 
                OffersStack: {
                    screen: OffersStack, 
                    navigationOptions:{
                        tabBarLabel:'Offers',
                        tabBarIcon: ({tintColor}) => (
                            <Image source={require('./Assets/offers-icon-25.png')} style={[ {tintColor: tintColor}, styles.iconStyles]}  />
                        )
                    }

                },
                BillClaim: {
                    screen: BillClaim,
                    navigationOptions:{
                        tabBarLabel:'claim',
                        tabBarIcon: ({tintColor}) => (
                            <Image source={require('./Assets/Claim.png')} style={[ {tintColor: tintColor}, styles.iconStyles]}  />
                        )
                    }
                },
                HomeScreen: {
                    screen: HomeScreen,
                    navigationOptions:{
                        tabBarLabel:'Home',
                        tabBarIcon: ({tintColor}) => (
                            <Image source={require('./Assets/home-4-64.png')} style={[ {tintColor: tintColor}, styles.iconStyles]}  />
                        )
                    }
                },
                History: {
                    screen: History,
                    navigationOptions:{
                        tabBarLabel:null,
                        tabBarIcon: ({tintColor}) => (
                            <Image source={require('./Assets/Historynew.png')} style={[ {tintColor: tintColor}, styles.iconStyles]}  />
                        )
                    }
                },
                ProfileStack: {
                    screen: ProfileStack,
                    navigationOptions:{
                        tabBarLabel:'Profile',
                        tabBarIcon: ({tintColor}) => (
                            <Image source={require('./Assets/contacts-64.png')} style={[ {tintColor: tintColor}, styles.iconStyles]}  />
                        )
                    }
                },
            },
            {
                initialRouteName: 'HomeScreen',
                tabBarOptions:{
                    inactiveTintColor:'#fff',
                    style:{
                        backgroundColor:'#90600a',
                    },
                    showLabel:false
                    }
                }
        );


const styles = StyleSheet.create({
    iconStyles:{
        resizeMode:'contain',
        height:24
    }
}) 

export default App = createSwitchNavigator({
    Auth: {
        screen: AuthStack
    },
    App: {
        screen: AppStack
    }},
    {
    
        initialRouteName: 'Auth',
        gesturesEnabled: false
      
    }
);
