import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameBoardScreen from './screens/GameBoardScreen';
import StartGameScreen from './screens/StartGameScreen';

import styles from './assets/style'

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {

    Font.loadAsync({
        "IndieFlower": require("./assets/fonts/IndieFlower-Regular.ttf"),
    });
};

export default function App() {

    const [startGame, setStartGame] = useState(false);

    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return ( <AppLoading startAsync = { fetchFont }
            onFinish = {
                () => setDataLoaded(true) }
            onError = { err => console.log(err) }
            />
        );
    }

    let startGameHandler = () => {
        setStartGame(true);
    };

    let content = < StartGameScreen onStartGame = { startGameHandler }
    /> ; 


    if (startGame) content = <GameBoardScreen/> ;

    return ( < View style = { styles.container } >
        < Header headerTxt = "Tic-Tac-Toe" /> 
        { content } 
        </View>
    );
}