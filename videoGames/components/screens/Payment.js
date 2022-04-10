import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    TextInput,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Items } from '../database/Database'
import styles from '../../assets/Style';
import { COLOURS } from '../../assets/Style';

const Payment = ({ navigation }) => {

    const [product, setProduct] = useState();
    

    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();


    const [fullName, setFullName] = useState();
    const [id, setId] = useState();
    const [numOfCard, setnumOfCard] = useState();
    const [validity, setValidity] = useState();
    const [CVV, setCVV] = useState();

    const [total, setTotal] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });
        return unsubscribe;
    }, [navigation]);

    const getDataFromDB = async() => {
        let items = await AsyncStorage.getItem('cartItems')
        items = JSON.parse(items);
        let productData = [];
        if (items) {
            Items.forEach(data => {
                if (items.includes(data.id)) {
                    productData.push(data)
                    return
                }
            })
            setProduct(productData)
            getTotal(productData)
        } else {
            setProduct(false)
            getTotal(false)
        }
    };
    const getTotal = productData => {
        let total = 0;
        for (let index = 0; index < productData.length; index++) {
            let productPrice = productData[index].productPrice
            total = total + productPrice;
        }
        setTotal(total);
    }

    //checkOut
    const CheckOut = async() => {
    try {
      await AsyncStorage.removeItem('cartItems')
    } catch (error) {
      return error
    }
    ToastAndroid.show("Items will be delivered SOON", ToastAndroid.SHORT)
  
    navigation.navigate('Success')
  
  }

    return (
         <View style = {{
                width: '100%',
                height: '100%',
                backgroundColor: COLOURS.white,
                position: 'relative',
            }}>
        <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {{
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                paddingTop: 20,
                paddingLeft: 16,
                marginBottom: 10,
            }}>Please fill in the details { '\n' } to continue with the payment </Text>
            </View>
          <View>

        <View style = {{alignItems: 'center',}}>
        <Text style = {{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '400',
                letterSpacing: 10,
                paddingTop: 20,
                paddingLeft: 16,
                marginBottom: 10,
            }}> User Information </Text> 
            <TextInput style = { styles.input2 }
                placeholder = 'First Name'/>

                <TextInput style = { styles.input2 }
                placeholder = 'Last Name'/>

                <TextInput style = { styles.input2 }
                placeholder = 'Email'/>

                <TextInput style = { styles.input2 }
                keyboardType = "phone-pad"
                placeholder = 'Phone Number' />

                <TextInput style = { styles.input2 }
                placeholder = 'Country'/>

                <TextInput style = { styles.input2 }
                placeholder = 'City'/>

                <TextInput style = { styles.input2 }
                placeholder = 'Address'/>
        <Text style = {{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '400',
                letterSpacing: 10,
                paddingTop: 20,
                paddingLeft: 16,
                marginBottom: 10,
            }}> Payment Details </Text>
             <TextInput style = { styles.input2 }
                placeholder = 'Full Name'/>

                <TextInput style = { styles.input2 }
                placeholder = 'ID Number'/>

                <TextInput style = { styles.input2 }
                maxLength = { 16 }
                keyboardType = "phone-pad"
                placeholder = 'Card Number'/>

                <TextInput style = { styles.input2 }
                placeholder = 'Expired Date' keyboardType = "numbers-and-punctuation" />

                <TextInput style = { styles.input2 }
                maxLength = { 3 }
                keyboardType = "phone-pad"
                placeholder = 'CVC' />
                </View> 

        <View style = {{
                paddingHorizontal: 16,
                marginTop: 40,
                marginBottom: 80,
            }}>
        <Text style = {{
                fontSize: 16,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
            }}>Order Info </Text>
             <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
            }}>
        <Text style = {{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.5,
            }}> Subtotal </Text>
             <Text style = {{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.8,
            }}> { total }.00 $ </Text>
             </View>
              <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
            }}>
        <Text style = {{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.5,
            }}> Shipping Tax </Text>

             <Text style = {{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.8,
            }} > { total / 20 }$</Text>
             </View>

              <View style = {{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }} >
            <Text style = {{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: COLOURS.black,
                opacity: 0.5,
                }}> Total </Text>

             <Text style = {{
                fontSize: 18,
                fontWeight: '500',
                color: COLOURS.black,
            }}> { total + total / 20 }$</Text> 
            </View> 
            </View> 
            </View> 
        </ScrollView>

        <View style = {{
                position: 'absolute',
                bottom: 10,
                height: '8%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
        <TouchableOpacity 
            onPress={() => total != 0 ? CheckOut() : null}
        
            style = {{
                width: '86%',
                height: '90%',
                backgroundColor: COLOURS.blue,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
        <Text style = {{
                fontSize: 12,
                fontWeight: '500',
                letterSpacing: 1,
                color: COLOURS.white,
                textTransform: 'uppercase',
            }} >Buy {'\uFF04'}{ total + total / 20 }</Text>
             </TouchableOpacity>
              </View>
             </View>
    );
};

export default Payment;
