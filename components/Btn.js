import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

class btn extends Component{
    mensaje = ()=>{Alert.alert('Bienvenido Angel')};
    render(){
        return(
            <View style={estilo.btn} onPress={this.mensaje}>
                <Text style={estilo.txt}>LOGIN</Text>
            </View>
        )
    }
}

const estilo = StyleSheet.create({

    btn:{
    alignContent:'center',    
    alignItems:'center',
    alignSelf:'center',        
    width:100,
    height:50,
    backgroundColor:'blue',
    shadowColor:'yellow',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    fontWeight:'bold'
    },
    txt:{        
        marginTop:10
    }
});

export default btn;