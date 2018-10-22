import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createTabNavigator,StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import MainScreen from './screens/MainScreen';
import Profile from './screens/Profile';
import AuthLoading from './screens/AuthLoading';
import FreeItems from './screens/FreeItems';
import RedeemScreen from './screens/RedeemScreen'
import History from './screens/History'
import BillClaim from './screens/BillClaim'


const AuthStack = createStackNavigator({
    AuthLoading:AuthLoading,
    Login:LogIn ,
    Register:Register,
    },
        {
            initialRouteName: 'AuthLoading'
        }
    )
 
      
const AppStack = createStackNavigator({ 
        HomePage:{
            screen:MainScreen,
            
        },
        Profile:{
            screen:Profile
        },
        RedeemScreen:{
            screen:RedeemScreen
            
        },
        FreeItems:{
            screen:FreeItems
        },
        History:{
            screen:History
        },
        BillClaim:{
            screen:BillClaim
        }
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