import React, {useState, useEffect} from 'react'
import { View, Text, StatusBar, TouchableOpacity ,SafeAreaView,FlatList,Dimensions,ImageBackground, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { Items, listTab} from '../database/Database'
import SearchBar from "../../models/SearchBar";
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



//search bar
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
 




  //category filter
  const setcategoryFilter = category => {
    if (category !== 'All') {
       setDatalist([...Items.filter(e => e.category === category)])
       
    }
    else {
        setDatalist(Items)
    }
    setcategory(category)
 }




//get products by search bar


 


const searchBarText = searchPhrase => {
  
  if (clicked && searchPhrase != "") {
  
    setDatalist([...datalist.filter(e => e.productName.includes(searchPhrase) ||  e.productPrice.toString().includes(searchPhrase)  /*||  e.year.toString().includes(searchPhrase) */ )])
    setClicked(false)
    // setSearchPhrase("")
  }
  if (clicked && searchPhrase == ""){
    setcategoryFilter(category)
    setClicked(false)
    
  }  
};

 const renderItem = ({item}) =>{


  return (
      <TouchableOpacity 
        onPress={() => navigation.navigate("ProductInfo", {productID: item.id})}
        //Home_TouchableOpacity_1
        style={
          styles.Home_TouchableOpacity_1
        }>
          {/* ["cover","contain","stretch","repeat","center"]*/}
    <ImageBackground source={item.productImage} resizeMode="cover" style={styles.image}>
      <View key={item.id} >
       
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
            // backgroundColor: COLOURS.white,
            padding: 5,
            

          }}/>
          <Text style={{
            fontSize: 14,
            color: COLOURS.green,
            backgroundColor: COLOURS.white,
            opacity:0.85,
            padding:2,
          // alignSelf:'flex-start', // limit row background color!
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
            backgroundColor: COLOURS.white,
            padding:2,
            opacity:0.85,
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
          padding:5,
          fontWeight: 'bold',
          color: COLOURS.white,
          backgroundColor: COLOURS.green,
          opacity:0.8,
          alignSelf:'flex-start', // limit row background color!
          // flexWrap:'wrap'
          // display:inline-block,
         
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
    // TouchableWithoutFeedback his job is to close the key board when clicking on the screen
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); setClicked(true); searchBarText(searchPhrase);}} accessible={false}>
    
    <View style={
      styles.Home_View_4
  
    }>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"/>
      <SafeAreaView style= {{flex:1
      // changing scroll view to SafeAreaView solve problem of: "virtualized list should never be nested inside plain scrollviews"
      }}showsVerticalScrollIndicator={false}> 
  
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

        <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      
      />
         <TouchableOpacity style={ {
        width:80, left:150, alignItems:'center', justifyContent: 'center', borderWidth: 2, borderRadius:5, borderColor: COLOURS.black, paddingHorizontal:15, backgroundColor: COLOURS.Aqua,
        }}  onPress={() => {Keyboard.dismiss(); setClicked(true); searchBarText(searchPhrase);}}>
          <Text style={{ width:70, padding:5,}}> Search</Text>
        </TouchableOpacity>
      
        <View style={{padding: 8,}}>
          <Text style={
              styles.Home_Text_2 }>
              Gamers-Pro
          </Text>
          <Text style={
              styles.Home_Text_3
       
          }>
              Best Video Game Shop on the internet.
              Our Shop offers both products and services
          </Text>
        </View>
        <SafeAreaView style={[styles.container]}>
        <View style={styles.listTabStyle}>
        <FlatList
          data={listTab}
          horizontal={true}
           renderItem={({item}) => <TouchableOpacity key={item.key} style={[styles.btnTab, category === item.category && styles.btnTabActive ]  }
                
           onPress={() => setcategoryFilter(item.category)}>
          <Text style={[styles.textTab, category === item.category && styles.textTabActive]}>{item.category}</Text>
      </TouchableOpacity>}
/>
    </View>
     
      <View style= {{ flexDirection: 'row' }}>
      <Text style={
        styles.Home_Text_4
           
              }>number of items: {datalist.length}</Text>
             
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
      searchPhrase={searchPhrase}
      setClicked={setClicked}
      
      renderItem= {renderItem}
      keyExtractor={item  => item.key}
      numColumns={numColumns}
      />
      
    </SafeAreaView>
   
      </SafeAreaView>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Home