import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class BillClaim extends Component {

    static navigationOptions = {
        header:null
    }

   constructor(props){
       super(props)
       state = {
           BillNo:'',
           Amount:''
       }
   }

    render(){
        return (
            <View style={{backgroundColor:'#282828', flex:1}} >
                <View style={{Height:50, flexDirection:'row', alignItems:'flex-start', paddingTop:15, paddingLeft:5, backgroundColor:'#282828'}}  >
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                        <Image source={ require('../Assets/home-4-64.png') } />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'column', backgroundColor:'#282828', flex:1, justifyContent:'center', paddingLeft:40, paddingRight:40 }} >
                    <Text style={{ fontSize:35, color:'#ccc', alignSelf:'center' }} >
                        Bill Claim
                    </Text>
                    <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                        <TextInput 
                        placeholder='Bill No.'
                        style={styles.TextInputStyle}
                        onchangeText={ BillNo => this.setState({ BillNo })}
                        placeholderTextColor='#aaa'
                        textAlign='center'
                        style={styles.textInputStyle}
                        />
                    </View>
                    <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                        <TextInput 
                        placeholder='Amount'
                        style={styles.TextInputStyle}
                        onchangeText={ Amount => this.setState({Amount}) }
                        placeholderTextColor='#aaa'
                        textAlign='center'
                        style={styles.textInputStyle}
                        />
                    </View>
                    <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:10, backgroundColor:'#AF690E', justifyContent:'center', marginBottom:80 }} >
                        <Text style={{fontSize:18, color:'#000', alignSelf:'center',}} >
                            Claim
                        </Text>
                     </TouchableOpacity>
                </View>


            </View>
        )}
}

const styles = StyleSheet.create({
    textInputStyle:{
        fontSize:18,
        color:'#fff',
    }
})

export default BillClaim;