import React, {Component} from 'react';
import { View, TouchableOpacity, Image, TextInput, Text, StyleSheet } from 'react-native';
    
class History extends Component{ 

    static navigationOptions = {
        header:null
      }

    render(){
        return (
            <View style={{backgroundColor:'#282828', flex:1}} >

                <View style={{ marginLeft:35, marginRight:35, justifyContent:'center', flexDirection:'row', marginTop:10}}>

                    <View style={{Height:50, flexDirection:'row', alignItems:'flex-start', paddingTop:15, marginLeft:-20, backgroundColor:'#282828', alignSelf:'flex-start'}}  >
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                            <Image source={ require('../Assets/home-4-64.png') } />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', borderRadius:50, backgroundColor:'#555', flex:1, justifyContent:'space-between', height:45, marginLeft:15, alignSelf:'flex-end', marginTop:60}} >
                        <TextInput
                                placeholder='search'
                                style={styles.textInputStyle}
                            />
                        <TouchableOpacity style={{backgroundColor:'#444', position:'relative', borderBottomRightRadius:50, borderTopRightRadius:50, justifyContent:'center', paddingLeft:30, paddingRight:30}} >
                            <Image source={ require('../Assets/search-24.png') } style={{ alignSelf:'center' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection:'column', marginTop:20 }} >
                    <View style={{ justifyContent:'flex-start', flexDirection:'row',marginLeft:35, marginRight:35, backgroundColor:'#444', height:30, alignItems:'center' }} >
                        <Text style={{ color:'#fff', fontSize:18, marginRight:20, marginLeft:10 }} >#</Text>
                        <Text style={{ color:'#fff', fontSize:18, marginRight:40 }} >Action</Text>
                        <Text style={{ color:'#fff', fontSize:18, marginRight:40 }} >Ptn.Amt</Text>
                        <Text style={{ color:'#fff', fontSize:18 }} >Date</Text>
                    </View>

                    <View style={{ justifyContent:'space-between', flexDirection:'row',marginLeft:35, marginRight:35, backgroundColor:'#555', height:30, alignItems:'center', paddingRight:10, paddingLeft:10 }} >
                        <Text style={{ color:'#fff', fontSize:18, }} >1</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >C</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >10</Text>
                        <Text style={{ color:'#fff', fontSize:18 }} >15 oct 2018</Text>
                    </View>

                    <View style={{ justifyContent:'space-between', flexDirection:'row',marginLeft:35, marginRight:35, backgroundColor:'#444', height:30, alignItems:'center', paddingRight:10, paddingLeft:10 }} >
                        <Text style={{ color:'#fff', fontSize:18, }} >2</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >R</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >-10</Text>
                        <Text style={{ color:'#fff', fontSize:18 }} >10 oct 2018</Text>
                    </View>

                    <View style={{ justifyContent:'space-between', flexDirection:'row',marginLeft:35, marginRight:35, backgroundColor:'#555', height:30, alignItems:'center', paddingRight:10, paddingLeft:10 }} >
                        <Text style={{ color:'#fff', fontSize:18, }} >3</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >R</Text>
                        <Text style={{ color:'#fff', fontSize:18, }} >2</Text>
                        <Text style={{ color:'#fff', fontSize:18 }} >10 oct 2018</Text>
                    </View>
                </View>
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputStyle:{
        flex:1,
        fontSize:18,
        color:'#ccc',
        alignSelf:'center',
        marginLeft:15
    }
})

export default History;

