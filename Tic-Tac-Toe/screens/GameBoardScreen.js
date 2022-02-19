import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import styles from '../assets/style'

export default function GameBoardScreen() {
    const [Gameboard, setGameBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
    const [currPlayer, setCurrPlayer] = useState(1);
    const [hasWinner, setHasWinner] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [countPress, setCountPress] = useState(0);
    const [arrOfWin, setArrOfWin] = useState(0);
    const [points, setPoints] = useState({ x: 0, o: 0 })

    let renderIcon = (row, column) => {



        let value = Gameboard[row][column];



        switch (value) {
            case 1:
                return <Icon name = "close"
                style = { styles.theX }
                />;
            case -1:
                return <Icon name = "circle-outline"
                style = { styles.theO }
                />;
            default:
                return;
        }

    };

    let checkWinner = () => {
        let sum;
       
        for (let row = 0; row < Gameboard.length; row++) {
            sum = Gameboard[row][0] + Gameboard[row][1] + Gameboard[row][2];
           
            if (sum === 3 || sum === -3)
                setArrOfWin(row === 0 ? 1 : row === 1 ? 2 : 3);
        
            if (sum === 3) return 1; // x won

            else if (sum === -3) return -1; // o won

        }
      
        for (let col = 0; col < Gameboard.length; col++) {
            sum = Gameboard[0][col] + Gameboard[1][col] + Gameboard[2][col];
            //------------------------------
            if (sum === 3 || sum === -3)
                setArrOfWin(col === 0 ? 4 : col === 1 ? 5 : 6);
            //------------------------------
            if (sum === 3)

                return 1; // x won

            else if (sum === -3) return -1; // o won


        }
        // main diagonal:
        sum = Gameboard[0][0] + Gameboard[1][1] + Gameboard[2][2];

        //------------------------------
        if (sum === 3 || sum === -3) setArrOfWin(7);
        //------------------------------

        if (sum === 3) return 1; // x won

        else if (sum === -3) return -1; // o won



        // secondery diagonal:
        sum = Gameboard[0][2] + Gameboard[1][1] + Gameboard[2][0];

        //------------------------------
        if (sum === 3 || sum === -3) setArrOfWin(8);
        //------------------------------ 

        if (sum === 3)

            return 1; // x won

        else if (sum === -3)

            return -1; // o won

        //if there is no winner:
        return 0;


    }


    let onSquarePress = (row, col) => {

        if (hasWinner) return;

        if (Gameboard[row][col] == 0) {
            setGameBoard([...Gameboard, (Gameboard[row][col] = currPlayer)]);
            setCountPress(countPress + 1)
            setCurrPlayer(currPlayer === 1 ? -1 : 1);

        }
        if (countPress == 8) {
            setShowButton(true);
            setCountPress(0)
        }



        let winner = checkWinner();
        if (winner === 1) {
            setPoints({...points, x: points.x + 1 })
                //  Alert.alert("X won");
                //  console.log("X won");
        } else if (winner === -1) {
            setPoints({...points, o: points.o + 1 })
                // Alert.alert("O won");
                // console.log("O won");   


        }
        // update state
        if (winner != 0) {
            setHasWinner(true);
            setShowButton(true);
            setCountPress(0);
        }
    }

    let restart = () => {
        //reset the matrix
        setTimeout(() => setGameBoard([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]), );
        //reset player
        setCurrPlayer(1);
        // reset has winner so we can press the touchables
        setHasWinner(false);

        setShowButton(false);
        setArrOfWin(0);

    }

    return ( <View style = { styles.container } >

        <View style = { styles.score } >
        <Text style = { styles.familyTxt } > SCORE: X = { points.x },  O = { points.o } </Text>
        </View>

        <View style = { styles.view } >
        <TouchableOpacity onPress = {    () => onSquarePress(0, 0) }
        style = {
            [styles.Touchable, { borderTopWidth: 0 }, { borderLeftWidth: 0 }, (arrOfWin === 1 || arrOfWin === 4 || arrOfWin === 7) ? styles.winSquare : "", ] } >  { renderIcon(0, 0) } 
            </TouchableOpacity>
        <TouchableOpacity onPress = {
            () => onSquarePress(0, 1) }
        style = {
            [styles.Touchable, { borderTopWidth: 0 }, (arrOfWin === 1 || arrOfWin === 5) ? styles.winSquare : "", ] } >  { renderIcon(0, 1) } 
            </TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onSquarePress(0, 2) }
        style = {
            [styles.Touchable, { borderTopWidth: 0 }, { borderRightWidth: 0 }, (arrOfWin === 1 || arrOfWin === 6 || arrOfWin === 8) ? styles.winSquare : "", ] } > { renderIcon(0, 2) } 
            </TouchableOpacity> </View>

        <View style = { styles.view } >
        <TouchableOpacity onPress = {
            () => onSquarePress(1, 0) }
        style = {
            [styles.Touchable, { borderLeftWidth: 0 }, (arrOfWin === 2 || arrOfWin === 4) ? styles.winSquare : "", ] } > { renderIcon(1, 0) }
             </TouchableOpacity> 
             <TouchableOpacity onPress = {
            () => onSquarePress(1, 1) }
        style = {
            [styles.Touchable, (arrOfWin === 2 || arrOfWin === 5 || arrOfWin === 7 || arrOfWin === 8) ? styles.winSquare : "", ] } > { renderIcon(1, 1) } 
            </TouchableOpacity> 
            <TouchableOpacity onPress = {
            () => onSquarePress(1, 2) }
        style = {
            [styles.Touchable, { borderRightWidth: 0 }, (arrOfWin === 2 || arrOfWin === 6) ? styles.winSquare : "", ] } > { renderIcon(1, 2) } 
            </TouchableOpacity> 
            </View>

        <View style = { styles.view } >
        <TouchableOpacity onPress = {
            () => onSquarePress(2, 0) }
        style = {
            [styles.Touchable, { borderBottomWidth: 0 }, { borderLeftWidth: 0 }, (arrOfWin === 3 || arrOfWin === 4 || arrOfWin === 8) ? styles.winSquare : "", ] } > { renderIcon(2, 0) } 
            </TouchableOpacity> 
            <TouchableOpacity onPress = {
            () => onSquarePress(2, 1) }
        style = {
            [styles.Touchable, { borderBottomWidth: 0 }, (arrOfWin === 3 || arrOfWin === 5) ? styles.winSquare : "", ] } > { renderIcon(2, 1) } 
            </TouchableOpacity> 
            <TouchableOpacity onPress = {
            () => onSquarePress(2, 2) }
        style = {
            [styles.Touchable, { borderBottomWidth: 0 }, { borderRightWidth: 0 }, (arrOfWin === 3 || arrOfWin === 6 || arrOfWin === 7) ? styles.winSquare : "", ] } > { renderIcon(2, 2) } 
            </TouchableOpacity> 
            </View>

        <View style = {
            [{ visibility: showButton ? 'visible' : 'hidden' }, { marginBottom: 100 }, ] } >
        <TouchableOpacity onPress = {
            () => restart() }
        style = { styles.restart } >
           <Text style = {
            [styles.txt, { flexWrap: "wrap" }] } > Restart </Text> 
            </TouchableOpacity> 
            </View>

        </View>
    );
}