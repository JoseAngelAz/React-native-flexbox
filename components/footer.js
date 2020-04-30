import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';

class footer extends Component{
    render(){
        return(
            <View style={estilo.footerContainer}>
                <View style={estilo.footerHeader}>               
                <View style={estilo.txt_one}>
                <Text style={estilo_two.txtone}>ANGEL</Text>
                </View>
                <View style={estilo.txt_two}>
                <Text style={estilo_two.txttwo}> HOLA ANGEL</Text>
                </View>
                <View style={estilo.section_tres}>
                <Image source={require('../assets/corazon-flat.png')} style={estilo.ima}/>
                </View>                              
            </View>
            <View style={[estilo.footerBody]}>
                <View style={estilo_two.card}>

                </View>
            </View>  
            </View>
            
        )
    }
}

const estilo_two = StyleSheet.create({
    card:{
        display:'flex',        
        alignSelf:'center',
        marginTop:50,        
        backgroundColor:'white',
        height:100,
        width:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    txtone:{
        alignSelf:'center'
    },
    txttwo:{
        alignSelf:'center'
    }
})

const estilo = StyleSheet.create({
footerContainer:{
flex:1
},
    footerHeader:{
    flex:0.340,
    flexDirection:'row'
},
footerBody:{
flex:1,
flexDirection:'column'
},
txt_one:{
height:'auto',
flex:0.300

},
txt_two:{
flex:0.300

},
section_tres:{
flex:0.400

},
ima:{
width:60,
height:60,
borderRadius:50,
display:'flex',
marginRight:20,
alignSelf:'flex-end'
}
})
export default footer;