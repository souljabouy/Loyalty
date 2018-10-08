import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import React from 'react';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import MainPage from './screens/MainPage';
import Page2 from './screens/Page2';
import AuthLoading from './screens/AuthLoading';

const AppLoading = createStackNavigator({
    AuthLoading: {
        screen:AuthLoading
    }
})

const AuthStack = createStackNavigator({
    Login: {
        screen: LogIn
        },
    Register:{
        screen: Register
        }
    })
const AppStack = createDrawerNavigator({ MainPage:MainPage, Page2:Page2 })

export default App = createSwitchNavigator({
    AppLoading:AppLoading,
    Auth:AuthStack,
    App:AppStack
    },
    {
        initialRouteName: 'AppLoading'
    }
)