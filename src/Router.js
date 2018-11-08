import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createTabNavigator,StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthLoading from './screens/AuthLoading';
import FreeItems from './screens/FreeItems';
import RedeemScreen from './screens/RedeemScreen'
import History from './screens/History'
import BillClaim from './screens/BillClaim'
import SettingsScreen from './screens/SettingsScreen'


const AuthStack = createStackNavigator({
    AuthLoading:AuthLoading,
    Login:LogIn ,
    Register:Register,
    },
        {
            initialRouteName: 'AuthLoading'
        }
    )
 
   
const Offers = createStackNavigator({
    FreeItems:FreeItems,
    RedeemScreen:RedeemScreen
    }
)

const ProfileStack = createStackNavigator({
    ProfileScreen:ProfileScreen,
    SettingsScreen:SettingsScreen
},
{
    navigationOptions:{
        header:null
    }
})

const AppStack = createBottomTabNavigator({ 
            Offers:{
                screen:Offers,      
            },
            BillClaim:{
                screen:BillClaim
            },
            HomeScreen:{
                screen:HomeScreen
            },
            History:{
                screen:History
            },
            ProfileStack:{
                screen:ProfileStack
            },
        },
        {
            initialRouteName:'HomeScreen'
        })

export default App = createSwitchNavigator({
    Auth:{
        screen:AuthStack
    },
    App:{
        screen:AppStack
    }
    },{
    navigationOptions:{
        initialRouteName: 'Auth',
        gesturesEnabled:false
        }
    }
)