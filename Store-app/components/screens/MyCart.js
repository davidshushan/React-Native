import { View, Text, ScrollView , TouchableOpacity, Image, TextInput, ToastAndroid} from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { COLOURS,Items, Coupons } from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const MyCart = ({navigation}) => {


 

  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null );

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB()
    });
    return unsubscribe;
  }, [navigation])

  //get data from local DB by ID
const getDataFromDB = async() => {
  let items = await AsyncStorage.getItem('cartItems');
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
}

// get total price of items in cart

const getTotal = productData => {
  let total = 0;
    for (let index = 0; index < productData.length; index++) {
      let productPrice = productData[index].productPrice
      total = total + productPrice   
    }
    total= total* Discount
    setTotal(total);
}

//remove item from cart

const removeItemFromCart = async id => {
  let itemArray = await AsyncStorage.getItem('cartItems');
  itemArray = JSON.parse(itemArray);
  if (itemArray) {
    let array = itemArray;
    for (let index = 0; index < array.length; index++) {
       if (array[index]== id){
         array.splice(index, 1);
       }
      await AsyncStorage.setItem('cartItems', JSON.stringify(array));
      getDataFromDB();
    }
  }
}

//checkOut
const CheckOut = async() => {
  try {
    await AsyncStorage.removeItem('cartItems')
  } catch (error) {
    return error
  }
  ToastAndroid.show("Items will be delivered SOON", ToastAndroid.SHORT)

  navigation.navigate("Home")

}

const renderProducts = (data, index) => {
    return (
      <TouchableOpacity 
      key={data.key}
      onPress={() => navigation.navigate("ProductInfo", {productID: data.id})}
      style={{
        width: '100%',
        height: 100,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
        <View style={{
          width: '30%',
          height: 100,
          padding: 14,
          justifyContent:'center',
          alignItems: 'center',
          backgroundColor: COLOURS.backgroundLight,
          borderRadius: 10,
          marginRight: 22,

        }}> 
          <Image source={data.productImage} style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain'
          }}/>
        </View>
         <View style={{flex: 1,
            height: '100%',
            justifyContent:'space-around',        
        }}>
           <View tyle={{}}>
              <Text style={{
                fontSize: 14,
                maxWidth: '100%',
                color: COLOURS.black,
                fontWeight: '600',
                letterSpacing: 1,

              }}>{data.productName}
              </Text>
              <View style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: 0.6,
                }}>
                <Text style={{
                  fontSize: 14,
                  fontWeight:'400',
                  maxWidth: '85%',
                  marginRight:  4,
              }}>
                {'\uFF04'}{data.productPrice}
                  </Text>
                  <Text>
                    (~{'\uFF04'}
                    { data.productPrice + data.productPrice/ 20 })
                  </Text>
               </View>
            </View>
            <View style= {
              {flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
          
          }}>

            
            <View style= {
              {flexDirection: 'row',
               alignItems: 'center',
          
          }}>
            <View style={{
              borderRadius: 100,
              marginRight: 20,
              borderWidth: 1,
              borderColor: COLOURS.backgroundMedium,
              opacity: 0.5,
              }}>
              <MaterialCommunityIcons name="minus"  // decrese item from cart icon
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
              }}/>
               </View>
               <Text>1</Text>
               <View style={{
              borderRadius: 100,
              marginLeft: 20,
              borderWidth: 1,
              borderColor: COLOURS.backgroundMedium,
              opacity: 0.5,
              }}>
              <MaterialCommunityIcons name="plus"  // increse item from cart icon
              style={{
                fontSize: 16,
                color: COLOURS.backgroundDark,
              }}/>
               </View>
            </View>   
              <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
                <MaterialCommunityIcons name="delete-outline" style={{
                  fontSize: 16,
                  Color:COLOURS.backgroundDark,
                  backgroundColor:COLOURS.backgroundLight,
                  padding: 8,
                  borderRadius: 100,

                }}/>
              </TouchableOpacity>
          </View>
          </View>
      </TouchableOpacity>
    )
}
const [flag, setflag] = useState(false);

const [text, setText] = useState('');
let Discount = 1;
const [ShowDiscount, setShowDiscount] = useState(1);

const checkCoupon = (text) => {
  
 for (const temp of Coupons ) {
  
   if (temp.name === text && flag == false) {
   
    Discount = temp.Discount   
    let price = Discount * total
    setflag(true)
    setShowDiscount(total - price)
    setTotal(price)
    
   
    console.log(ShowDiscount)

    ToastAndroid.show(
      "Coupon was Added Succsesfully!", ToastAndroid.SHORT);
   
   }
 }
 ToastAndroid.show(flag == true? "Coupon already added!" : "Coupon NOT Found!", ToastAndroid.SHORT);
 }

  return (
    
      
    
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: COLOURS.white,
      position:'relative',
     }}>

     <ScrollView>
       <View style={{
         width: '100%',
         flexDirection: 'row',
         paddingTop:16,
         paddingHorizontal: 16,
         justifyContent: 'center',
         alignItems: 'center',
       }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
          name="chevron-left" style= {{
            fontSize:18,
            color: COLOURS.backgroundDark,
            padding: 12,
            backgroundColor: COLOURS.backgroundLight,
            borderRadius: 12,
          }}/>
        </TouchableOpacity>
        <Text style= {{
          fontSize:14,
          color: COLOURS.black,
          fontWeight: '400',

        }}>Order Details
        </Text>
        <View>

        </View>
       </View>
       <Text style={{
         fontSize:20,
         color: COLOURS.black,
         fontWeight: '500',
         letterSpacing:1,
         paddingTop:20,
         paddingLeft: 16,
         paddingBottom:10,
       }}>
         My Cart
       </Text>
       <View style={{paddingHorizontal: 16, }}>
         { product? product.map(renderProducts) : null}
       </View>
          <View>
              <View style={{
                paddingHorizontal: 16,
                marginVertical: 10,

               }}>
                <Text style={{
                  fontSize:16,
                  color: COLOURS.black,
                  fontWeight:'500',
                  letterSpacing:1,
                  marginBottom: 20,
                }}>Delivery Location</Text>
                <View style={{
                  flexDirection: 'row',

                }}>
                  <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                    alignItems: 'center',
                    // justifyContent: 'space-between'

                  }}>
                      <View style={{
                        color: COLOURS.blue,
                        backgroundColor: COLOURS.backgroundLight,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 12,
                        borderRadius: 10,
                        marginRight: 18,

                        
                      }}>
                      <MaterialCommunityIcons name='truck-delivery-outline' style={{
                        fontSize: 18,
                        color: COLOURS.blue,
                      }}/>
                      </View>
                      <View>
                        <Text style={{
                          fontSize: 14,
                          color: COLOURS.black,
                          fontWeight:'500',
                        }}>
                         Arlozorov St 83.
                        </Text>

                        <Text style={{
                          fontSize: 12,
                          color: COLOURS.black,
                          fontWeight:'400',
                          lineHeight: 20,
                          opacity: 0.5,

                        }}>
                          Tel Aviv-Yafo, Israel
                        </Text>
                      </View>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" style= {{
                      fontSize: 22,
                      color: COLOURS.black,
                    }}/>
                </View>
            </View>

            <View style={{
                paddingHorizontal: 16,
                marginVertical: 10,

              }}>
                <Text style={{
                  fontSize:16,
                  color: COLOURS.black,
                  fontWeight:'500',
                  letterSpacing:1,
                  marginBottom: 20,
                }}>Payment Method  </Text>
                <View style={{
                  flexDirection: 'row',

                }}>
                  <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    alignItems: 'center',
                    alignItems: 'center',
                    // justifyContent: 'space-between'

                  }}>
                      <View style={{
                        color: COLOURS.blue,
                        backgroundColor: COLOURS.backgroundLight,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 12,
                        borderRadius: 10,
                        marginRight: 18,    
                      }}>
                      <Text style={{
                        fontSize: 10,
                        fontWeight: '900',
                        color: COLOURS.blue,
                        letterSpacing: 1,
                      }}>VISA</Text>
                      </View>

                      <View>
                        <Text style={{
                          fontSize: 14,
                          color: COLOURS.black,
                          fontWeight:'500',
                        }}>
                          Visa Classic
                        </Text>

                        <Text style={{
                          fontSize: 12,
                          color: COLOURS.black,
                          fontWeight:'400',
                          lineHeight: 20,
                          opacity: 0.5,

                        }}>
                          ****-1234
                        </Text>
                      </View>
                    </View>
                    <MaterialCommunityIcons name="chevron-right" style= {{
                      fontSize: 22,
                      color: COLOURS.black,
                    }}/>
                </View>
            </View>
            <View style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
              <Text 
               style={{
                fontSize:16,
                color: COLOURS.black,
                fontWeight:'500',
                letterSpacing:1,
                marginBottom: 20,
              }}>Order Info</Text>

              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginBottom: 8,
              }}>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>Subtotal</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>{'\uFF04'}{total}.00</Text>
              </View>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginBottom: 22,
              }}>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>Shipping Tax</Text>
                <Text style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: COLOURS.black,
                  opacity: 0.8,
                }}>{'\uFF04'}{total / 20}</Text>
                <Text>{"\n"}</Text>
                 
              </View>
              <View style={{
                    margin: 5,
                  }}>
                       <Text>Coupon: {'\uFF04'}{flag==true? ShowDiscount : 0}</Text>
                  </View>

              <View style={{
                  flexDirection: 'row', height: '25%', width: '100%', padding: 10,marginTop: 15,}}>
                   
              <View style={{padding: '5%', borderWidth:1, flexDirection: 'row', width:'70%', borderRadius: 10,}}>
                <TextInput
                  style={{height: 20, flexShrink: 1}}
                  placeholder="Type tour coupon Here!"
                  onChangeText={newText => setText(newText)}
                  defaultValue={text}
                />
              </View>

              <View style={{
                height:'100%',
                width:'35%',
                justifyContent:'center',
                alignItems:'center',
              }}>
              <TouchableOpacity style={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                height:'100%',
                // marginTop: 15,
              }}  onPress={() => checkCoupon(text)}>
                <Text style={{
                 color: COLOURS.white,
                 height:'100%',
                  backgroundColor: COLOURS.backgroundDark,
                  borderRadius: 10,
                  
                  padding: 10,
                  paddingTop:'15%',
                  
                }}>
                  checkCoupon
                </Text>
              </TouchableOpacity>
              </View>
              </View>

              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
              }}>
                <Text style={{
                  // marginTop: 15,
                  margin: 15,
                  fontSize: 20,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: COLOURS.black,
                  opacity: 0.5,
                }}>Total</Text>
                <Text style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: COLOURS.black,
                }}>{'\uFF04'}{total  + total / 20}</Text>
          
              </View>


            </View>
          </View>
     </ScrollView>

     <View  
       style={{ 
          position:'absolute',
          bottom: 10,
          height: '8%',
          width:'100%',
          justifyContent:'center',
          alignItems:'center',

      }}>
        <TouchableOpacity
        onPress={() => total != 0 ? CheckOut() : null} 
          style={{
            width:'86%',
            height:'90%',
            backgroundColor: COLOURS.blue,
            borderRadius: 20,
            justifyContent:'center',
            alignItems:'center',
          }}>
            <Text style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',

            }}>CHECKOUT ({'\uFF04'} {total + total / 20})</Text>
          </TouchableOpacity>

        </View>
     
    </View>
  )
}
export default MyCart
