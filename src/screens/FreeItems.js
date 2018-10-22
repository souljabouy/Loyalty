import React, {Component} from 'react';
import {    View,
            Text, 
            Alert,
            AsyncStorage,
            Image,
            TouchableOpacity } from 'react-native';

class FreeItems extends Component{
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
                        Your Free Item
                    </Text>
                    <View style={{ borderRadius:25, marginTop:8, backgroundColor:'#ccc', alignItems:'center' }} >
                        <Image source={require('../Assets/barcode-64(Black).png')}/>
                    </View>
                    <Text style={{ fontSize:18, color:'#ccc', alignSelf:'center', marginTop:10 }} >
                        expiry date
                    </Text>
                    <Text style={{ fontSize:18, color:'#ccc', alignSelf:'center',  marginTop:5 }} >
                        DD/MM/YYYY
                    </Text>
                </View>
            
            </View>
        )
    }

}
export default FreeItems;


    //     constructor(props){
    //         super(props)
    //         this.state={
    //             userID:'',
    //             token:'',
    //             points:'',
    //             asof:'',
    //             outletId:'1',
    //             lastredpiont:'',
    //             lastreddate:''
    
    //         }
    //     }
    //     componentWillMount(){
    //         this.getTokken();
    //         this.getUserid();
    //     }
    
        
    //     async getTokken(){
    //         try{
    //             let a = await AsyncStorage.getItem('TOKKEN');
    //             if (a !== null ){
    //                 this.setState({token:a})
    //             }
    //         }catch (error){
    //             Alert.alert('','cant get Tokken')
    //         }
    //     }
        
    //     async getUserid(){
    //         try{
    //             let a = await AsyncStorage.getItem('USERID');
    //             if (a !== null){
    //                 //return a
    //                 this.setState({ userID:a })
    //             }
    //         } catch (error){
    //             Alert.alert('','cant get User id')
    //         }
    //     }  
      
    //     async storeItem(Key, Value){
    //         try{
    //           await AsyncStorage.setItem(Key, Value)
    //         } catch(error){
    //           Alert.alert('', key + "fail to store")
    //         }
    //       } 
    
    //       onFatcheSucess(tokken, Points){
    //         this.storeItem('TOKKEN', tokken)
    //         this.setState({token: tokken})
    //         this.setState({points:Points})
    
    //       }
    
    //     fetchBasicInfo(){
    //         fetch('http://echespos.com/jawaahiruapi/index.php', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },body: JSON.stringify({
    //                 cmd: '104000',
    //                 user_id:this.state.userID,
    //                 token:this.state.token,
    //                 outlet_id:'1'
    //             })
    //         }).then((response)=> response.json())
    //             .then((responseJson) =>{
    //                 if (responseJson.results.cmd === '104011'){
    //                     this.onFatcheSucess(responseJson.data.token, responseJson.data.points)
    //                 }else{
    //                     Alert.alert('', responsejson.results.cmd + ' Connection error')
    //                 }
    //             }).catch((error)=> Alert.alert(error,'network error') )
    //         }
    
    // render(){
    //     return( 
    //         <View>
    //             <Text>
    //                 Shiahaan
    //             </Text>
    //             <TouchableOpacity onPress={()=>{this.fetchBasicInfo()}}>
    //                 <Text>
    //                     Press me
    //                 </Text> 
    //              </TouchableOpacity>
    
    //             <Text>{ this.state.token }</Text> 
    //             <Text>{ this.state.userID }</Text> 
    //             <Text> {this.state.points} </Text>
    //         </View>
    //     )
    // }
   