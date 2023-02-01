import React from "react"
import { StyleSheet, TextInput } from "react-native"

const Input = ({ newStyle, ...restProps }) => {
    return <TextInput style={{ ...styles.input, ...newStyle }} {...restProps} />
  }


const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
  },
})

export default Input