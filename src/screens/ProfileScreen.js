import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, AsyncStorage, Alert, KeyboardAvoidingView} from 'react-native';

const EMAIL = 'EMAIL'
const NATIONALID = 'NATIONALID'
const DATEOFBIRTH = 'DATEOFBIRTH'
const GENDER = 'GENDER'
const PASSWORD = 'PASSWORD'


class ProfileScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            nationalID:'',
            dateOfBirth:'',
            gender:'',
            password:'',
            fullName:'',
            editable: false

        }
    }

    static navigationOptions = {
        header:null
    }

    componentDidMount(){
        this.getValues()
    }

    retriveEmail = async () => {
        try {
            const value = await AsyncStorage.getItem( EMAIL )
            if  (value !== null){
                this.setState({ email: value })
            }else{
                this.setState({ email:'' })
            }
        }catch(error){
            console.alert(error)
        }
    }

    retriveNationalID = async () => {
        try {
            const value = await AsyncStorage.getItem( NATIONALID )
            if  (value !== null){
                this.setState({ nationalID: value })
            }else{
                this.setState({ nationalID:'' })
            }
        }catch(error){
            console.alert(error)
        }
    }

    retriveDateOfBirth = async () => {
        try {
            const value = await AsyncStorage.getItem( DATEOFBIRTH )
            if  (value !== null){
                this.setState({ dateOfBirth: value })
            }else{
                this.setState({ dateOfBirth:'' })
            }
        }catch(error){
            console.alert(error)
        }
    }

    retriveGender = async () => {
        try {
            const value = await AsyncStorage.getItem( GENDER )
            if  (value !== null){
                this.setState({ gender: value })
            }else{
                this.setState({ gender:'' })
            }
        }catch(error){
            console.alert(error)
        }
    }

    retrivePassword = async () => {
        try {
            const value = await AsyncStorage.getItem( PASSWORD )
            if  (value !== null){
                this.setState({ password: value })
            }else{
                this.setState({ password:'' })
            }
        }catch(error){
            console.alert(error)
        }
    }




    getValues(){
       this.retriveEmail()
       this.retriveNationalID()
       this.retriveDateOfBirth()
       this.retriveGender()
       this.retrivePassword()
    
    }

    saveValues = async ()=>{
        Alert.alert("saved", "profile Updated Successfully!")
        await AsyncStorage.setItem( EMAIL, this.state.email )
        await AsyncStorage.setItem( NATIONALID, this.state.nationalID )
        await AsyncStorage.setItem( DATEOFBIRTH, this.state.dateOfBirth )
        await AsyncStorage.setItem( GENDER, this.state.gender )
        await AsyncStorage.setItem( PASSWORD, this.state.password )
        this.setState({editable: false})
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={{backgroundColor:'#282828', flex:1}}>

                <View style={{height:260, backgroundColor:'#AF690E', flexDirection:'column', justifyContent:'center'}} >

                <View style={{Height:50, flexDirection:'row', justifyContent:'space-between', paddingLeft:5, backgroundColor:'#AF6900', marginRight:15}}  >
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                        <Image source={ require('../Assets/home-4-64.png') } />
                    </TouchableOpacity>
                    <View style={ {flexDirection:'row'} } >
                        <TouchableOpacity onPress={ ()=> this.setState({ editable: !this.state.editable }) } style={{ paddingRight:7 }} >
                            <Image source={require( '../Assets/edit-11-16.png' )} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('SettingsScreen') } >
                            <Image source={ require( '../Assets/settings-3-16.png' ) } />
                        </TouchableOpacity>
                    </View>
                </View>

                    <View style={{ borderWidth:3, justifyContent:'center', alignSelf:'center', backgroundColor:'#999', borderRadius:100, borderColor:'#fff', width:180, height:180, marginTop:-50 }} >
                        <Image source={require('../Assets/contacts-128.png')} style={{alignSelf:'center'}} />
                    </View>

                    <Text style={{fontSize:16, color:'#fff', alignSelf:'center', paddingTop:3, paddingBottom:15}} >
                            Full Name
                    </Text>
                </View>
                <View style={{paddingLeft:35, paddingRight:35, flexDirection:'column'}} >
                    <View style={{ borderRadius:50, borderColor:'#000', borderWidth:2, backgroundColor:'#fff', marginTop:-25, alignItems:'center', height:55}} >
                        <Text style={{ fontFamily:'ConnectCode39', fontSize:18, paddingTop:1 }} >*123245*</Text>
                        <Text style={{ fontSize:12 }} >*123245*</Text>
                    </View>
                    <View style={{flexDirection:'column'}} >
                        <View style={{ borderRadius:50, height:45, marginTop:8, backgroundColor:'#383838' }} >
                            <TextInput 
                                placeholder='Email'
                                editable={ this.state.editable }
                                value={this.state.email}
                                onChangeText={ email=> this.setState({ email }) }
                                style={styles.TextInputStyle}
                                placeholderTextColor='#aaa'
                                textAlign='center'
                                style={styles.textInputStyle}
                                
                            />
                        </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='National ID'
                                    editable={ this.state.editable }
                                    value={this.state.nationalID}
                                    onChangeText={ nationalID => this.setState({ nationalID })}
                                    style={styles.TextInputStyle}
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='DOB'
                                    editable={ this.state.editable }
                                    value={this.state.dateOfBirth}
                                    onChangeText={ dateOfBirth => this.setState({ dateOfBirth })}
                                    style={styles.TextInputStyle}
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                            <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                                <TextInput 
                                        placeholder='Gender'
                                        editable={ this.state.editable }
                                        value={this.state.gender}
                                        onChangeText={gender => this.setState({ gender })}
                                        style={styles.TextInputStyle}
                                        placeholderTextColor='#aaa'
                                        textAlign='center'
                                        style={styles.textInputStyle}
                                    />
                            </View>
                        <View style={{ borderRadius:50, height:45, marginTop:4, backgroundColor:'#383838' }} >
                            <TextInput 
                                    placeholder='Password'
                                    editable={ this.state.editable }
                                    value={this.state.password}
                                    onChangeText={password=>this.setState({ password }) }
                                    style={styles.TextInputStyle}
                                    secureTextEntry
                                    placeholderTextColor='#aaa'
                                    textAlign='center'
                                    style={styles.textInputStyle}
                                />
                        </View>
                        <TouchableOpacity style={{ borderRadius:50, height:45, marginTop:6, backgroundColor:'#AF690E', justifyContent:'center' }}
                                          onPress={ () => this.saveValues() }
                                         >
                            <Text style={{fontSize:18, color:'#000', alignSelf:'center',}} >
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        
            </KeyboardAvoidingView>
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

export default ProfileScreen;