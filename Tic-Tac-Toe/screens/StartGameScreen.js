import React from 'react';
import {  Text, TouchableOpacity, View, Image } from 'react-native';
import styles from '../assets/style'



export default function StartGameScreen(props) {
    return (

        <View style={styles.container}>
         <View style = { styles.imgContainer } >
             <Image source = { require('../assets/i.jpg') }
                  style = { styles.img }  />
            </View >

    

        <TouchableOpacity onPress = {
            () => props.onStartGame() }
        style = { styles.myButton } >
        <Text style = { styles.txt } > Start a New Game </Text> 
        </TouchableOpacity>

        </View>

    );
}