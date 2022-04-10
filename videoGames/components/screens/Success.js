import React from 'react';
import { Text,TouchableOpacity,View} from 'react-native';
import { ImageBackground } from 'react-native';
// import { COLOURS } from '../database/Database';
import { COLOURS } from '../../assets/Style';
import spalsh from '../database/images/products/success.jpg';


const Success = ({navigation}) =>{
return (
    <ImageBackground source={spalsh} 
    resizeMode= 'cover' 
    // export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';   
    style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      

      opacity:0.9,
    }}>
    <View>
            <Text style={{
              fontSize:20,
              justifyContent:'center',
              // right: 30,
                top: -150,
                padding:10,
                 backgroundColor:COLOURS.backgroundLight
             
            }}>
            Fun, payment passed successfully,
            {'\n'}renew!!
            </Text>
            <View>
            <TouchableOpacity  style= {{  
                  top: 200,
                  justifyContent:'center',
                  alignItems:'center',
                }}
            onPress={() => navigation.navigate('Home')}>
                <Text style= {{
                  fontSize:16,
                  justifyContent:'center',
                  padding: 10,
                  borderRadius:20,
                  borderWidth:1,
                  // alignItems:'center',
                  backgroundColor:COLOURS.Aqua,
                }}>Back to Home Page</Text>
            </TouchableOpacity>
            </View>
    </View>
    </ImageBackground>
  );
}

export default Success;
