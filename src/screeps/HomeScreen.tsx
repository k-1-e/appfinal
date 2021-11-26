import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import FormInputs from '../componetes/FormInputs'

const HomeScreen = ({ navigation }) => {

  const [nombre, setNombre] = useState<string>('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState<number>(0)
  const [selectedValue, setSelectedValue] = useState('');

  const Calculardatos = () => {
    if (num1 === 'kevin' && num2 === "1234") {
   navigation.navigate('FeedScreen', {})
    }
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 40, color: "orange" }}> Hola bebe </Text>


      <View >
        <FormInputs
          title=" El Correo"
          defaultValue={num1}
          onChangeText={setNombre}

        />
        <FormInputs
          title="la contrasena"
          defaultValue={num2}
          onChangeText={setNombre}
        />
        <Button title="Calcular"
          onPress={Calculardatos}
        />
      </View>
      <Button
        title="INGRESAR"
        onPress={() => navigation.navigate('FeedScreen', {

        })}
      />
    </View>

  );

};

export default HomeScreen;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: '#F2F8FB',
    borderRadius: 8,
    padding: 10,
    textAlign: 'right',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#004445'

  },
  text: {

    fontSize: 20,
    color: 'blue'

  }
})