import React from 'react';
import {  Text, View } from 'react-native';
import {  NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import Payment2 from './components/screens/Payment2';
 import Succsess from './components/screens/Succsess'

const App  = () =>{

    const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='MyCart' component={MyCart}/>
            <Stack.Screen name='ProductInfo' component={ProductInfo}/>
            <Stack.Screen name='Payment2' component={Payment2}/>
            <Stack.Screen name='Succsess' component={Succsess}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
