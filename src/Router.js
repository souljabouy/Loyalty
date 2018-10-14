import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, createTabNavigator,StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
import LogIn from './screens/LogIn';
import Register from './screens/Register';
import MainPage from './screens/MainPage';
import GlobalPoints from './screens/GlobalPoints';
import AuthLoading from './screens/AuthLoading';
import StorePage from './screens/StorePage'


const AuthStack = createStackNavigator({
    AuthLoading:AuthLoading,
    Login:LogIn ,
    Register:Register,
    },
        {
            initialRouteName: 'AuthLoading'
        }
    )
 

const MainPageStack = StackNavigator({
    Main:{
        screen: MainPage
    },
    StorePage:{
        screen:StorePage
    }
},
    {
        navigationOptions:{
            initialRouteName: 'Main',
        }
    }
)
       
const DrawerStack = DrawerNavigator({ 
        MainPageStack:{
            screen:MainPageStack,
            navigationOptions:{
                title:'Home'
            }
        },
        GlobalPoints:{
            screen:GlobalPoints
        } 
    }
)

export default App = createSwitchNavigator({
    Auth:AuthStack,
    App:DrawerStack
    },
    {
        initialRouteName: 'Auth',
        gesturesEnabled:false
    }
)