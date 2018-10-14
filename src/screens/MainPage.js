import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, StyleSheet, ListView } from 'react-native';
import { Header, Card, Button, CardSection } from '../components/common'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MainPage extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          accessToken: "hello",
          UserId:''

        }
      }
static navigationOptions = ({ navigation }) => {   
    return {
        headerLeft: (
            <View style={{ padding: 10 }}>    
            <Button withPress={() => navigation.openDrawer()} >
            ==
                </Button>
            </View>
            ),
            title:'main'
        }
    }
componentWillMount(){
    this.getTokken();
    //this.getUserId();
    this.getUserId();
}
componentWillUnmount(){

}
componentDidUpdate(){
    this.getStores();
}

getStores(){
    fetch('http://echespos.com/jawaahiruapi/index.php',{
        method: 'POST',
        headers:{
            Accept: 'application/json',
                    'content-Type': 'application/json'
        },
        body:JSON.stringify({
            cmd:'',
            user_id:'',
            tokken:''
        })    
    })
}

getTokken = async () => {
    try{
        let a = await AsyncStorage.getItem('Tokken');
        if (a !== null){
            this.setState({accessToken:a})
        }
    } catch (error){
        console.log(error)
    }
}   
getUserId = async () => {
    try{
        let a = await AsyncStorage.getItem('USERID');
        if (a !== null){
            this.setState({UserId:a})
        }
    } catch (error){
        Alert.alert('','get user error')
    }
} 
render(){
        return(
            <View style={styles.ViewStyle}>
                    <Card Style={styles.containerStyle} >
                        <CardSection>
                            <Button withPress={()=> this.props.navigation.navigate('StorePage') } >
                                Stor1
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button>
                                Stor2
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button>
                                stor3
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button>
                                stor4
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button>
                                store5
                            </Button>
                        </CardSection>
                        <CardSection>
                            <Button>
                                stor6
                        </Button>
                        </CardSection>
                    </Card>
            </View>
            )
        }
    }

            
const styles = StyleSheet.create({
    ViewStyle: {
        flex:1
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height:100,
        justifyContent:'center',
        flex:1

    }}
)
export default MainPage;