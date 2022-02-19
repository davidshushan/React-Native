import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150, // half of height/width
        borderWidth: 10,
        borderColor: 'darkseagreen',
        overflow: "hidden",
        marginBottom: 30,
    },
    img: {
        height: "100%",
        width: "100%",
    },
    Touchable: {
        height: 100,
        width: 100,
        backgroundColor: "lightgray",
        borderColor: "black",
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    view: {

        flexDirection: 'row',

    },
    theX: {
        color: "red",
        fontSize: 60,
    },
    theO: {
        color: "blue",
        fontSize: 60,
    },

    restart: {
        height: 60,
        width: 150,
        backgroundColor: "aquamarine",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 2,
        margin: 20,
        borderRadius: 50,
        flexWrap: 'wrap',
    },

    winSquare: {
        borderColor: "mediumseagreen",
        borderWidth: 5,
        borderRadius: 10,

        opacity: 55,
        borderTopWidth: 8,
        borderBottomWidth: 8,
        borderRightWidth: 8,
        borderLeftWidth: 8,
    },

    score: {
        backgroundColor: 'darkseagreen',
        height: 30,
        width: '70%',
        margin: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },
    txt: {
        color: "black",
        fontFamily: "IndieFlower",
        fontSize: 30,
        textAlign: 'center',
    },

    header: {
        height: 80,
        width: "100%",
        //flex: 1,
        backgroundColor: "mediumseagreen",
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTxt: {
        color: "black",
        fontSize: 50,
        fontFamily: "IndieFlower",
    },

    myButton: {
        backgroundColor: 'darkseagreen',
        //flexWrap: 'wrap',
        height: 80,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin: 40,
        borderWidth: 2,

    },
    familyTxt: {
        fontFamily: 'IndieFlower'
    },

});