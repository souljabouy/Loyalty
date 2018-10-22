import React, {Component} from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, Image, TextInput } from 'react-native';



class RedeemScreen extends Component{
    static navigationOptions = {
        header:null
    }
    
    render(){
        return(
            <View style={{backgroundColor:'#282828', flex:1}} >
                <View style={{Height:50, flexDirection:'row', alignItems:'flex-start', paddingTop:15, paddingLeft:5, backgroundColor:'#282828'}}  >
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                        <Image source={ require('../Assets/arrow.png') } />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'column', backgroundColor:'#282828', flex:1, justifyContent:'center', paddingLeft:40, paddingRight:40 }} >
                    <Text style={{ fontSize:35, color:'#ccc', alignSelf:'center' }} >
                        Redeem
                    </Text>
                    <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                        <TextInput 
                        placeholder='MVR'
                        style={styles.TextInputStyle}
                        placeholderTextColor='#aaa'
                        textAlign='center'
                        style={styles.textInputStyle}
                        />
                    </View>
                    <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:10, backgroundColor:'#AF690E', justifyContent:'center', marginBottom:80 }} >
                        <Text style={{fontSize:18, color:'#000', alignSelf:'center',}} >
                            Redeem
                        </Text>
                     </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    textInputStyle:{
        fontSize:18,
        color:'#fff',
    }
}

export default RedeemScreen;








































// constructor(props){
//     super(props)
//     this.state = {
//         loading:false
//     }
// }

//                         // async removeItem(value){
                        //     try {
                        //         await AsyncStorage.removeItem(value);
                        //         return true
                        //     }catch(exception) {
                        //         Alert.alert(exception, 'removing value error')
                        //     }
                        // }
                        
                        // logOut(){
                        //     this.setState({loading:true})
                        //     AsyncStorage.setItem("isLoggedIn", "211")
                        //     this.props.navigation.navigate('Auth');
                        // }
                        
                        // renderSpinner(){
                        //     if(this.state.loading){
                        //         return <Spinner />
                        //     }
                        //     else{
                        //         return (<TouchableOpacity onPress={()=>this.logOut()}>
                        //             <Text> Log Out</Text>
                        //             </TouchableOpacity>
                        //     )}
                        // }