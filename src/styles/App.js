import React, {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#E9967A'
    },
    texto: {
      color: '#fff',
      fontSize: 29
    },
    slogan:{
      color:'#FFD700',
      fontSize: 15
    },
    image:{
      padding: 40,
      width:160,
      height:160,
      borderRadius:100
    },
    input:{
      padding:10,
      marginTop:10,
      width:300,
      backgroundColor:'#fff',
      borderRadius:4,
      fontSize:16,
      fontWeight:'bold'
    },
    botao:{
      width:300,
      height:42,
      marginTop:10,
      borderRadius:4,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FF7F00',
    },
    textobotao:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold'
    }
  });

export default styles;