import React, { Component } from 'react';
import {View,Text,StyleSheet,Image,Button,Alert}from 'react-native';
import Btn from './components/Btn';
import Footer from './components/footer';

class mi_ejercicio extends Component{
  mensaje = ()=>{Alert.alert('Bienvenido Angel')};
  render(){
    return(
      <View style={estilos.container}>

        <View style={estilos.header}>
          <View style={estilos.headerLeft}>
            <Image source={require('./assets/bandera-flat.png')} style={estilos.logo} />          
          </View>
          <View style={[estilos.headerRigth]}>
          <Btn style={estilos.bb} onPress={this.mensaje}/>
          </View>                  
        </View>
        <View style={estilos.body}>
        <Text>BIENVENIDO A MI PRIMERA APP MOBILE</Text>
        </View>
        <Footer/>
      </View>
    )
  }
}

const estilos = StyleSheet.create({

  container:{
    backgroundColor: 'green',
    flex:1,
    justifyContent:'center',
    flexDirection:'column'
  },
  header:{
    flex:0.3,
    flexDirection:'row',
    marginTop:40
  },
  logo:{
    width:100,
    height:100,
    borderRadius:50,
    resizeMode:'contain',
    marginLeft:10,
    marginTop:10
  },
  headerLeft:{
    flex:1,
    
  },
  headerRigth:{
    flex:1,
    shadowColor:'yellow',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    fontWeight:'bold'
  },
  bb:{
    
  },
  body:{
    alignItems:'center',
    flex:1,
    justifyContent:'center',
    alignSelf:'center',    
    
  },
  footer:{
    flex:0.2,
    backgroundColor:'red'
  }

});

export default mi_ejercicio;