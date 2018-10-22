import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

class Profile extends Component {
    static navigationOptions = {
        header:null
    }
    
    render(){
        return(
            <ScrollView style={{backgroundColor:'#282828', flex:1}}>
                <View style={{Height:50, flexDirection:'row', alignItems:'flex-start', paddingTop:15, paddingLeft:5, backgroundColor:'#AF690E'}}  >
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                        <Image source={ require('../Assets/arrow.png') } />
                    </TouchableOpacity>
                </View>

                <View style={{height:260, backgroundColor:'#AF690E', flexDirection:'column', justifyContent:'center'}} >
                    <View style={{ borderWidth:3, justifyContent:'center', alignSelf:'center', backgroundColor:'#999', borderRadius:100, borderColor:'#fff', width:180, height:180, marginTop:-50 }} >
                        <Image source={require('../Assets/contacts-128.png')} style={{alignSelf:'center'}} />
                    </View>

                    <Text style={{fontSize:26, color:'#fff', alignSelf:'center', marginTop:16}} >
                            Full Name
                    </Text>
                </View>
                <View style={{paddingLeft:35, paddingRight:35, flexDirection:'column'}} >
                    <View style={{ borderRadius:50, borderColor:'#000', borderWidth:2, backgroundColor:'#fff', marginTop:-33, alignItems:'center',}} >
                        <Image source={require('../Assets/barcode-64(Black).png')}/>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                            <TextInput 
                                placeholder='Email'
                                style={styles.TextInputStyle}
                                placeholderTextColor='#aaa'
                                textAlign='center'
                                style={styles.textInputStyle}
                                
                            />
                        </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='National ID'
                                    style={styles.TextInputStyle}
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='DOB'
                                    style={styles.TextInputStyle}
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                            <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                                <TextInput 
                                        placeholder='Gender'
                                        style={styles.TextInputStyle}
                                        placeholderTextColor='#aaa'
                                        textAlign='center'
                                        style={styles.textInputStyle}
                                    />
                            </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='Password'
                                    style={styles.TextInputStyle}
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:6, backgroundColor:'#AF690E', justifyContent:'center' }} >
                            <Text style={{fontSize:18, color:'#000', alignSelf:'center',}} >
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        
            </ScrollView>
        )
    }
}


const styles = {
        textInputStyle:{
            flex:1,
            fontSize:18,
            color:'#fff',
            alignSelf:'center'
        }
    }

export default Profile;