import React, {Component} from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, Image, TextInput, Modal } from 'react-native';
import {Header} from '../components/common'



class RedeemScreen extends Component{

    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
            mvr:''
        }
    }

    static navigationOptions = {
        header:null
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    
    render(){
        return(
            <View style={{backgroundColor:'#282828', flex:1}} >
                <Header withPress={()=>this.props.navigation.goBack()} >
                    Redeem
                </Header>
                <View style={{ flexDirection:'column', backgroundColor:'#282828', flex:1, justifyContent:'center', paddingLeft:40, paddingRight:40 }} >
                    <Text style={{ fontSize:35, color:'#ccc', alignSelf:'center' }} >
                        Redeem
                    </Text>
                    <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                        <TextInput 
                        placeholder='MVR'
                        value={this.state.mvr}
                        onChangeText={(mvr)=>this.setState({ mvr })}
                        style={styles.TextInputStyle}
                        placeholderTextColor='#aaa'
                        textAlign='center'
                        keyboardType="number-pad"
                        style={styles.textInputStyle}
                        />
                    </View>
                    <TouchableOpacity  onPress={ ()=> this.setModalVisible(true)} style={{ borderRadius:50, height:45, marginTop:10, backgroundColor:'#AF690E', justifyContent:'center', marginBottom:80 }} >
                        <Text style={{fontSize:18, color:'#000', alignSelf:'center',}} >
                            Redeem
                        </Text>
                     </TouchableOpacity>

                     <Modal 
                            animationType='slide'
                            visible={this.state.modalVisible}
                            onRequestClose={ ()=> console.log('modal Closed') }  
                            transparent={true}
                            
                        >
                        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }} >
                        <View style={{ justifyContent:'center', width:350 , height:150, backgroundColor:'#fff', alignSelf:'center', borderRadius:15 }} >
                            <View>
                                <Text style={{ fontFamily:'ConnectCode39', alignSelf:'center', fontSize:25}} >
                                    {this.state.mvr}
                                </Text>

                            </View>
                            <TouchableOpacity onPress={ ()=> this.setModalVisible(false) } style={{ alignSelf:'center' }} >
                                <Text style={{ alignSelf:'center', fontSize:16}} >done</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                     </Modal>

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