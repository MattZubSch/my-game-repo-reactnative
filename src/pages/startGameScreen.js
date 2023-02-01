import React, { useState} from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Keyboard, 
  Button,
  TouchableWithoutFeedback 
} from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";


const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlerInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ""))
  } 

  const handlerResetInput = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue)
    if(choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return

    setConfirmed(true)
    setSelectedNumber(parseInt(enteredValue))
    setEnteredValue('')
  }

  // const confirmedOutput = confirmed ? <Text>Numero Elegido: {selectedNumber}</Text> : null
  
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
      }}>

        <View style={styles.screen}> 
             <Text style={styles.title}>Start Game</Text>
             <Card style={styles.inputContainer}>
                <Text>Elija un Numero</Text>
                <Input style={styles.input}
                  blurOnSubmit
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="numeric"
                  maxLength={2}
                  onChangeText={handlerInputNumber}
                  value={enteredValue}
                  />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                      <Button 
                      title='Limpiar' 
                      onPress={handlerResetInput} 
                      color={Colors.accent}/>
                    </View>
                    <View style={styles.button}>
                      <Button 
                      title='Confirmar' 
                      onPress={handlerConfirmInput} 
                      color={Colors.primary}/>
                    </View>
                </View>
             </Card>
             {confirmed && (
            <Card style={styles.summaryContainer}>
              <Text>Your number is:</Text>
              <NumberContainer>{selectedNumber}</NumberContainer>
                <Button
                  title="Empezar Juego"
                  color={Colors.primary}
                  onPress={() => props.onStartGame(selectedNumber)}
                />
            </Card>
          )}
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: "black",
        fontFamily: 'OpenSansBold'
      },
      buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
      },
      button: {
        width: 100
      },
      inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center',
      },
      summaryContainer: {
        width: 300,
        maxWidth: '50%',
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
      }

})

export default StartGameScreen
