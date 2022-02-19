import { StyleSheet, Text, View, Dimensions, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const listTab = [
    {
        status: 'all'
    },
    {
        status: 'Basketball'
    },
    {
        status: 'Football'
    },    
]

const data = [
    {
        name: 'Ronaldo',
        status: 'green'          
    },

    {
        name: 'Messi',
        status: 'purple'          
    },
    {
        name: 'Kaka',
        status: 'green'          
    },
    {
        name: 'Mbappe',
        status: 'green'          
    },
    {
        name: 'Lukaku',
        status: 'purple'          
    },
]

    const category = () => {
    const [status, setStatus] = useState('All');
    const [datalist, setDatalist] = useState(data)
    const setStatusFilter = status => {
        if (status !== 'All') {
           setDatalist([...data.filter(e => e.status === status)]) 
        }
        else {
            setDatalist(data)
        }
        setStatus(status)
    }
    const renderItem = ({item, index}) =>{
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.itemLogo}>
                    <Image
                    style={styles.itemImage}
                    source={{uri: 'https://contents.mediadecathlon.com/p1681786/k$b289823f9a0d1d76690ca2dc6e6bc9e6/sq/football-shirts.jpg?format=auto&f=800x0'}}
                    />
                </View>
                <View style={styles.itemBody}>
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>

                <View style={[styles.itemStatus,
                    {backgroundColor: item.status === 'Purple' ? '#e5848e' : '#69c080'}]}>
                    <Text style={styles.itemName}>{item.status}</Text>
                </View>

            </View>
        )
    }


const separator = () => {
    return <View style = {{height: 1, backgroundColor: '#f1f1f1'}}/>
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
          {
              listTab.map(e => (
                <TouchableOpacity style={[styles.btnTab, status === e.status && styles.btnTabActive ]}
                 onPress={() => setStatusFilter(e.status)}>
                <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
            </TouchableOpacity>
              ))
          }
        
      </View>
      <FlatList
      data={datalist}
      keyExtractor={(e, i ) => i.toString()}
      renderItem= {renderItem}
      ItemSeparatorComponent = {separator}
      />
    </SafeAreaView>
  )
}

export default category

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    listTab: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20,

    },

    btnTab: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center',
    },

    textTab: {
        fontSize: 16,
    },

    btnTabActive: {
        backgroundColor: '#E6838D'
    },

    textTabActive: {
     color: '#fff'   
    },

    itemContainer:{
        flexDirection: 'row',
        paddingVertical: 15,

    },
    itemLogo: {
        padding:10,
    },
    itemImage: {
        width: 50,
        height: 50,
    },

    itemBody: {
       flex: 1,
       paddingHorizontal: 10,
       justifyContent: 'center',

    },

    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    itemStatus: {
        backgroundColor: 'green',
        paddingHorizontal: 6,
        justifyContent: 'center',
        right: 12,
    },

})