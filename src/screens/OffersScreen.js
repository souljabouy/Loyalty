import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


class OffersScreen extends Component {
    
    render(){
        return (
            <View style={{backgroundColor:'#282828', flex:1}} >
                <View style={{ flexDirection:'column', backgroundColor:'#282828', flex:1, justifyContent:'center', paddingLeft:8, paddingRight:8 }} >
                    <Text style={{ fontSize:35, color:'#ccc', alignSelf:'center' }} >
                        Offers
                    </Text>
                    <View style={{ flexDirection:'row', justifyContent:'space-between'}} >
                        <TouchableOpacity onPress={()=> this.props.navigation.navigate('RedeemScreen')  } style={[Styles.cardStyle, {marginRight:7}]}  >
                                <Text style={{ color:'#fff', fontSize:16 }} >
                                    redeem
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('FreeItems') } style={Styles.cardStyle} >
                                <Text style={{ color:'#fff', fontSize:16 }}  >
                                    freeitems
                                </Text>
                        </TouchableOpacity>
                    </View> 
                </View>
            </View>
        )}

}

const Styles = StyleSheet.create({
    cardStyle:{
    borderRadius:10,
    borderColor:'#ddd',
    borderWidth:1,
    shadowOffset:{ width:0, height:10},
    shadowOpacity: 0.8,
    elevation:1,
    shadowRadius:2,
    justifyContent:'center',
    flex:1,
    shadowColor:'#000',
    alignSelf:'center',
    padding:7,
    alignItems:'center'
    }
})

export default OffersScreen;