import React, {useState, useEffect} from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image ,SafeAreaView,FlatList,Dimensions, StyleSheet,ImageBackground} from 'react-native'
import { Items, listTab} from '../database/Database'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from '../../assets/Style';
import { COLOURS } from '../../assets/Style';

//num of columns on flat list (items in each row)
const numColumns = 2;
const WIDTH = Dimensions.get("window").width;
const Home = ({navigation}) => {

  const [category, setcategory] = useState('All');
  const [datalist, setDatalist] = useState(Items)
  const setcategoryFilter = category => {
    if (category !== 'All') {
       setDatalist([...Items.filter(e => e.category === category)]) 
    }
    else {
        setDatalist(Items)
    }
    setcategory(category)
 }

  //handle last row item on odd nuber of items

  // use with odd number of items

  // formatData = (datalist, numColumns) => {
  //   const totalRows = Math.floor(datalist.length / numColumns )
  //   let totalLastRow = datalist.length - (totalRows * numColumns)
  //   while (totalLastRow !== 0 && totalLastRow !== numColumns) {
  //     datalist.push({ empty: true})
  //     totalLastRow++
  //   }
  //   return datalist
  // }

 const renderItem = ({item, index}) =>{

  // if (item.empty) {
  //       return <View style= {
  //         [styles.itemStyle, styles.itemInvisible]
  //       }/>
  // }
  return (
    
      <TouchableOpacity 
        onPress={() => navigation.navigate("ProductInfo", {productID: item.id})}
        //Home_TouchableOpacity_1
        style={
          styles.Home_TouchableOpacity_1
        }>
    <ImageBackground source={item.productImage} resizeMode="cover" style={styles.image}>
      <View key={index} >
       
        {
            item.isOff ? (
              <View
              //Home_View_1
               style={
                 styles.Home_View_1
              }>
                <Text style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                }}>
                  {item.offPersentage}%
                </Text>
              </View>) : null }

        {  item.isAvailable ? ( //is available property
        <View 
        //Home_View_2
        style={
          styles.Home_View_2
        }>
          <FontAwesome name="circle" style={{
            fontSize: 14, 
            marginRight:6,
            color: COLOURS.green,
            

          }}/>
          <Text style={{
            fontSize: 14,
            color: COLOURS.green,
          }}>Available</Text>
        </View>
      ):(
        <View style={
          styles.Home_View_3
        }>
          <FontAwesome name="circle" style={{
            fontSize: 14, 
            marginRight:6,
            color: COLOURS.red,

          }}/>
          <Text style={{
            fontSize: 14,
            color: COLOURS.red,
          }}>Unvailable</Text>
        </View>
      )}

     
     
      
      <View style={{
      }}>
      <Text style={
        styles.Home_Text_1
      }>
        {item.productName}
      </Text>
      
        <Text style={{
          marginLeft:10,
          fontSize: 20,
         
        }}>
          {'\uFF04'}{item.productPrice}

        </Text>
        </View>
    
    
      </View>
       </ImageBackground>
       </TouchableOpacity>
      
  )
}
    //starts on screen loads
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
      });
      return unsubscribe;
    }, [navigation])



  return (
    
    <View style={
      styles.Home_View_4
  
    }>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={
          styles.Home_View_5
       
        }>
          <TouchableOpacity>
            <Entypo name="shopping-bag" style={
              styles.Home_Entypo_1
        
            }/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons name="cart" style={
              styles.Home_Icon_1
         
            }/>
          </TouchableOpacity>

        </View>
        <View style={{
          marginBottom: 10,
          padding: 16,
        }}>
    

          <Text style={
              styles.Home_Text_2
       
          }>
              Shoes Shop and Service
          </Text>
          <Text style={
              styles.Home_Text_3
       
          }>
              Best Shoes Shop on the internet.
              Our Shop offers both products and services
          </Text>
        </View>

        <SafeAreaView style={styles.container}>
      <View style={styles.listTabStyle}>
          {
              listTab.map(e => (
                <TouchableOpacity style={[styles.btnTab, category === e.category && styles.btnTabActive ]}
                 onPress={() => setcategoryFilter(e.category)}>
                <Text style={[styles.textTab, category === e.category && styles.textTabActive]}>{e.category}</Text>
            </TouchableOpacity>
              ))
          }
        
      </View>
      <View style= {{ flexDirection: 'row' }}>
      <Text style={
        styles.Home_Text_4
           
              }>number of items: {Items.length}</Text>
             
  <TouchableOpacity style= {[ //Home_TouchableOpacity_2
    styles.btnTab,{right: -100,borderRadius:15, borderWidth:0.8, backgroundColor: COLOURS.backgroundLight,
    }]}
  onPress={() =>setcategoryFilter('All') }>
  <Text style={
            styles.Home_Text_5
                }>
                  SeeAll
              </Text>
  </TouchableOpacity>
     
      </View>
      
      <FlatList
      
      data={datalist}
      
      
      // data={this.formatData(datalist,numColumns)} // use with odd number of items
      keyExtractor={(e, i ) => i.toString()}
      renderItem= {renderItem}
      numColumns={numColumns}
      />
      
    </SafeAreaView>
   
      </ScrollView>
    </View>
  )
}

export default Home