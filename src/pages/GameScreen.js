import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const GameScreen = props => {

    // const [currentGuess, setCurrentGuess] = useState()

    // useEffect(() => {
    //   setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    // }, [])
    
    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        const randomNum = Math.floor(Math.random() * (max -min) + min)
        if (randomNum === exclude)
        return generateRandomBetween(min, max, exclude)
        else
        return randomNum
    }
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userOption))
    
    return (
        <View style={styles.screen}>
            <Text>La Suposicion del Oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='MAYOR' onPress={() => {}}></Button>
                <Button title='MENOR' onPress={() => {}}></Button>
            </Card>
        </View>
    )




}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: "80%",
    }
})

export default GameScreen