
import React, {Component} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/App'



function Welcome({navigation}) {  


      return (
        <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../img/perfil.png')}/>
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'></TextInput>
             <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"></TextInput>
            <TouchableOpacity 
              style={styles.botao}
              onPress={()=>{navigation.push('Home')}}>
                  <Text style={styles.textobotao}>Login</Text>
              </TouchableOpacity>
        </View>
      );
}


export default Welcome