import React, {useState, useEffect} from 'react'
import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image ,SafeAreaView,FlatList,Dimensions, StyleSheet,ImageBackground} from 'react-native'
import {COLOURS, Items, listTab} from '../database/Database'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"



const image = { uri: "https://reactjs.org/logo-og.png" };

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
        style={{
          width: '48%',
          margin:2,
          marginVertical: 5,    
        }}>
    <ImageBackground source={item.productImage} resizeMode="cover" style={styles.image}>
      <View key={index} style={{
      }}>

        
        {
            item.isOff ? (
              <View style={{
                position: 'absolute',
                width:'20%',
                height: '24%',
                backgroundColor: COLOURS.green,
                
                top: 0,
                left: 0,
                borderTopLeftRadius:10,
                borderBottomRightRadius:10,
                alignItems: 'center',
                justifyContent: 'center',
                
              }}>
                <Text style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                }}>
                  {item.offPersentage}%
                </Text>
              </View>) : null }

        {  item.isAvailable ? ( //is available property
        <View style={{
          marginBottom:30,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center',
        }}>
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
        <View style={{
          marginBottom:30,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center',
        }}>
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
      <Text style={{
        fontSize: 14,
        color: COLOURS.black,
        fontWeight:'600',
        marginBottom: 2,
        marginTop: 90,
        marginLeft:10,
        flex: 1,
      
        paddingTop:20,
      }}>
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
    
    <View style={{
        width: '100%',
        height: '100%',
        backgroundColor:COLOURS.white
    }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          width: '100%',
          flexDirection:'row',
          justifyContent:'space-between',
          padding: 16,
        }}>
          <TouchableOpacity>
            <Entypo name="shopping-bag" style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              backgroundColor: COLOURS.backgroundLight,
            }}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons name="cart" style={{
              fontSize: 18,
              color: COLOURS.backgroundMedium,
              padding: 12,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: COLOURS.backgroundLight,

            }}/>
          </TouchableOpacity>

        </View>
        <View style={{
          marginBottom: 10,
          padding: 16,
        }}>
          <Text tyle={{
            fontSize: 26,
            color: COLOURS.black,
            fontWeight: '500',
            letterSpacing: 1,
            marginBottom: 10
          }}>
              Shoes Shop &amp; Service
          </Text>

          <Text style={{
            fontSize: 14,
            color: COLOURS.black,
            fontWeight: '400',
            letterSpacing: 1,
            marginBottom: 10,
            lineHeight: 24,

          }}>
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

export default Home;


const styles = StyleSheet.create({

  container: {
      flex: 1,
      paddingTop: 40,
  },
  itemStyle:{
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    margin:1,
    marginBottom:25,
    height: WIDTH / numColumns,   
},

itemInvisible:{
  backgroundColor: 'transparent',
},

  listTabStyle: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 20,

  },

  btnTab: {
      flexDirection: 'row',
      borderWidth:1,
      borderColor: COLOURS.black,
      padding: 5.5,
      justifyContent: 'center',
  },



  textTab: {
      fontSize: 13,
      color: COLOURS.black,
  },
  btnTabActive: {
    backgroundColor: '#E6838D'
},

textTabActive: {
 color: '#fff'   
},

  image: {
    flex: 1,
    justifyContent: "center",
    margin:2
  },

})

