
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import styles from '../assets/style';



const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}>{props.headerTxt}</Text>
    </View>
  );
};

export default Header;
