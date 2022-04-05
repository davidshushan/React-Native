import React, {useState, useEffect }from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, FlatList, Image, Dimensions, Animated, ToastAndroid } from 'react-native'
import { Items } from '../database/Database';
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Rating, } from 'react-native-ratings';
import { COLOURS } from '../../assets/Style';
import styles from '../../assets/Style';

const WIDTH = Dimensions.get('window').width;
const ProductInfo = ({route,navigation}) => {

  const {productID} = route.params;

  const [product, setProduct] = useState({});

  

  const scrollX = new Animated.Value(0);
  
  let position = Animated.divide(scrollX, WIDTH)

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    });
    return unsubscribe;
  }, [navigation])

  //get product data by productID

  const getDataFromDB = async() => {
    for (let i = 0; i < Items.length; i++) {
      if ( Items[i].id == productID) {
         setProduct(Items[i])
        return;
      } 
    }
  };

  //add to cart

  const addToCart = async(id) => {
    let itemArray =await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray)
    if (itemArray) {
      let array = itemArray
      array.push(id);
    

    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      ToastAndroid.show(
        "Item Added Succsesfully to cart", ToastAndroid.SHORT
      );
      navigation.navigate('Home');
    } catch (error) {
      return error
    }
  }
  else {
    let array = [];
    array.push(id);
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      ToastAndroid.show(
        "Item Added Succsesfully to cart", ToastAndroid.SHORT
      );
      navigation.navigate('Home');
    }
     catch (error) {
      return error
    }
  }

  }

  // product horizontal scroll product card
const renderProduct = ({item}) => {
  return (
    <View style={{
      width: WIDTH,
      height: 240,
      alignItems: 'center',
      justifyContent: 'center',

      
    }} >
      <Image source={item} style={{
        width: '100%',
        height: '100%',
        resizeMode: "contain",  
      /* ["cover","contain","stretch","repeat","center"]*/  
      }}/>
      
    </View>
    
  )
};

  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
      position: 'relative',
     
    }}>
      <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>

      <ScrollView>
        <View
         style={styles.productInfo_View_1}>
          <View
           style={ styles.productInfo_View_2}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo name='chevron-left' 
              style={styles.productInfo_Entypo_1}/>
            </TouchableOpacity>
          </View>
          <FlatList style = {{ }}
          data = {product.productImageList ? product.productImageList: null} 
          horizontal 
          renderItem={renderProduct} // solved the error of: "missing keys for items, make sure to specify a key or id property"
          keyExtractor={(item, index) => index.toString()}
          
          showsHorizontalScrollIndicator={false} 
          decelerationRate={0.5}// determines how quickly the scroll view decelerates after the user lifts their finger
          snapToInterval={WIDTH} // swap all picture insteed of half picture an screen - need to be width!
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x:scrollX}}}],
            {useNativeDriver:false}
            
          )}/>
         
          <View style={styles.productInfo_View_3}>
            {product.productImageList
             ? product.productImageList.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index-1, index, index +1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp',

                })
                return (
                  <Animated.View 
                  key={index}
                  style={
                    [styles.productInfo_AnimatedView_1,{opacity}]}></Animated.View>
                  );
              })

            :null}
          </View>
        </View>
        <View style={{
        paddingHorizontal:16,
        marginTop:6
        }}>
        <View style={{
          flexDirection: 'row',
          alignItems:'center',
          marginVertical:14,
        }}>
          <Entypo
          name='shopping-cart'
          style={{
            fontSize: 18,
            color: COLOURS.blue,
            marginRight: 6,

          }} />
          <Text style={{ 
            fontSize: 12,
            color: COLOURS.black,
          }}>Shopping
          </Text>
        </View>
        <View style={{
          flexDirection:'row',
          marginVertical:4,
          alignItems: 'center',
          justifyContent:'space-between',
        }}>
          <Text
           style={styles.productInfo_View_4}>{product.productName}</Text>
            <Ionicons name='link-outline' 
            style={styles.productInfo_Ionicons_1}/>
            
          </View>

          <Text style={styles.productInfo_Text_2}>
            {product.description}
          </Text>
          <View  
           style={styles.productInfo_View_5}>
             <View
              style={ styles.productInfo_View_6  }>
                <View style={styles.productInfo_View_7  }>
                <Entypo name="location-pin" style={{
                  fontSize: 16,
                  color: COLOURS.blue,
                }}/>
               </View>
               <Text> Ariel University 9A,{'\n'} Ariel, Israel </Text>
               
             </View>
             <Entypo name="chevron-right" style={{
               fontSize:22,
               color:COLOURS.backgroundDark,

             }}/>
          </View>
          <View style={styles.Home_View_5}>
            <Text style={{fontSize: 16,color: COLOURS.black,fontWeight: '600', letterSpacing: 1,}}>year:   {product.year}</Text>
          </View>
          <Rating
                  showRating
                  style={{ paddingVertical: 10 }}
                />
            <View style={[{
              paddingHorizontal: 16,
            }]}>
             <Text 
             style={
               [styles.productInfo_Text_3, {paddingTop: 20}]
             }>Price:               {'\uFF04'}{product.productPrice}.00</Text> 
             <Text style={{ 
               marginBottom: 100,
             }}>
               Shipment rate 5% ~  {'\uFF04'}{product.productPrice / 20} ({'\uFF04'}
               {product.productPrice  + product.productPrice / 20  })
             </Text>
            </View>
        </View>
      </ScrollView>

       <View  
       style={
         styles.productInfo_View_8
      }>
        <TouchableOpacity
        onPress={() => product.isAvailable ? addToCart(product.id) : null} 
          style={
            styles.productInfo_TouchableOpacity_1
          }>
            <Text style={
                styles.productInfo_Text_4
            }>{product.isAvailable ? 'Add to cart' : 'Not available'}</Text>
          </TouchableOpacity>

        </View>
    </View>
  );
};

export default ProductInfo;