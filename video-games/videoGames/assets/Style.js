import { StyleSheet } from "react-native";

export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    Aqua: '#00FFFF',

}

export default StyleSheet.create({

    itemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 1,
        marginBottom: 5,
    },

    itemInvisible: {
        backgroundColor: 'transparent',
    },

    listTabStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5,
        backgroundColor: COLOURS.backgroundMedium,
        padding:3,

    },

    btnTab: {
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius:5,
        borderColor: COLOURS.black,
        padding: 5,
        paddingHorizontal:15,
        margin: 1,
        marginLeft:4,
        justifyContent: 'center',
        backgroundColor: COLOURS.Aqua,
    },

    textTab: {
        fontSize: 15,
        fontWeight:'bold',
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
        margin: 2
    },



    ProductCardTouchableOpacity: {
        width: '48%',
        marginVertical: 2,
    },
    productContainer: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,

    },
    OffPrecentage: {
        position: 'absolute',
        width: '20%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    offPrecentageText: {
        fontSize: 12,
        color: COLOURS.white,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
  
    shoeTitle: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: '600',
        marginBottom: 2,
    },
    greenCircle: {
        fontSize: 12,
        marginRight: 6,
        color: COLOURS.green,
    },
    available: {
        fontSize: 12,
        color: COLOURS.green,
    },
    unvailable: {
        fontSize: 12,
        marginRight: 6,
        color: COLOURS.red,
    },
    input: {
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
        padding: 8,
        margin: 10,
        width: 150,
        borderRadius: 25,
    },
    input2: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin:10,
        width:250,
    },
    backGround: {
        width: '100%',
        height: '100%'
    },
    categories: {
        letterSpacing: 5,
        fontSize: 12,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 5,
    },
    item: {
        marginTop: 15,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10,
    },


    // Home:
    Home_View_1: {
        position: 'absolute',
        width: '20%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Home_TouchableOpacity_1: {
        width: '48%',
        margin: 2,
        marginVertical: 2,
    },
    Home_View_1: {
        position: 'absolute',
        width: '20%',
        height: '24%',
        backgroundColor: COLOURS.green,
        top: 0,
        left: 0,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Home_View_2: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Home_View_3: {
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    Home_Text_1: {
        fontSize: 14,
        color: COLOURS.white,
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 90,
        marginLeft: 10,
        opacity:0.85,
        // flex: 1,
        // paddingTop: 20,
        padding:5,
        backgroundColor: COLOURS.green,
        alignSelf:'flex-start', // limit row background color!
    },
    Home_View_4: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white
    },
    Home_View_5: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    Home_Entypo_1: {
        //Home_Entypo_1
        fontSize: 20,
        color: COLOURS.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        margin:2,
    },
    Home_Icon_1: {
        //Home_Icon_1
        fontSize: 20,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLight,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
        margin:2,
    },
    Home_Text_2: {
        //Home_Text_2
        fontSize: 30,
        alignSelf:'center',
        color: COLOURS.black,
        fontWeight: '600',
        letterSpacing: 1,
        marginBottom: 5,

    },
    Home_Text_3: {
        //Home_Text_3
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        marginBottom: 5,
        lineHeight: 24,
    },

    Home_Text_4: {
        //Home_Text_4
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: '400',
        opacity: 0.5,
        marginLeft: 20,
        position: 'relative',
        margin: 5,
    },

    Home_Text_5: {
        //Home_Text_5
        fontSize: 18,
        color: COLOURS.blue,
        fontWeight: '400',
        marginLeft: 10
    },



    //productInfo:
    productInfo_View_1: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
    },
    productInfo_View_2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 16,
    },

    productInfo_View_3: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 32,
    },
    productInfo_View_4: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: '84%',
    },
    productInfo_View_5: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginVertical: 14,
        borderBottomColor: COLOURS.backgroundLight,
        borderBottomWidth: 1,
        padding: 10,
    },
    productInfo_View_6: {
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',

    },
    productInfo_View_7: {
        color: COLOURS.blue,
        backgroundColor: COLOURS.backgroundLight,
        alignItems: 'center',
        padding: 6,
        borderRadius: 100,
        marginRight: 10,
    },
    productInfo_View_8: {
        position: 'absolute',
        bottom: 5,
        height: '8%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    productInfo_Entypo_1: {
        fontSize: 18,
        color: COLOURS.backgroundDark,
        padding: 12,
        backgroundColor: COLOURS.white,
        borderRadius: 10,
    },
    productInfo_AnimatedView_1: {
        width: '16%',
        height: 2.4,
        backgroundColor: COLOURS.black,
        marginHorizontal: 4,
        borderRadius: 100,
    },
    productInfo_Ionicons_1: {
        fontSize: 24,
        color: COLOURS.blue,
        backgroundColor: COLOURS.blue + 10,
        padding: 8,
        borderRadius: 100,
    },
    productInfo_Text_1: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: '84%',
    },
    productInfo_Text_2: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: '400',
        letterSpacing: 1,
        opacity: 0.8,
        lineHeight: 20,
        maxWidth: '85%',
        // maxHeight: 44,
        marginBottom: 6,
    },
    productInfo_Text_3: {
        fontSize: 20,
        fontWeight: '600',
        maxWidth: '85%',
        color: COLOURS.black,
        marginBottom: 5,
    },
    productInfo_Text_4: {
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 1,
        color: COLOURS.white,
        textTransform: 'uppercase',

    },
    productInfo_TouchableOpacity_1: {
        width: '86%',
        height: '90%',
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})