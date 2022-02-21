import React from 'react';
import { Text,TouchableOpacity,View} from 'react-native';
import { ImageBackground } from 'react-native';
// import { COLOURS } from '../database/Database';
import { COLOURS } from '../../assets/Style';
import spalsh from '../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-1.jpg';


const Succsess = ({navigation}) =>{
return (
    <ImageBackground source={spalsh} style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
    <View>
            <Text style={{
              fontSize:20,
              justifyContent:'center',
              // right: 30,
                top: -100,
             
            }}>
            Fun, payment passed successfully,
            {'\n'}renew!!
            </Text>
            <Text></Text>
            <Text></Text>
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

export default Succsess;
