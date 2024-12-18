import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('window');

const Calculator = () => {
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (x) => {
    if (operand1 === 0) {
      setOperand1(x);
      console.log("operand1 set to ",x)
    } else {
      setOperand2(x);
      console.log("operand2 set to", x)
    }
  };

  const clear = () => {
    //  this needs to also clear calculated result
    setOperand1(0);
    setOperand2(0);
    setOperation('');
    
    console.log("cleared")
  };

  const add = () => {
    setOperation('add');
    console.log(" operation set to add")

  };
  const subtract = () =>{
    setOperation('subtract');
    console.log("operation changed to ", subtract)
  };
  const multiply = () =>{
    setOperation('multiply');
    console.log(multiply)
  
  };
  const divide = () => { 
    setOperation('divide');
    console.log(" operation set to divide")
  
  };

  const compute = () => {
    let calculatedResult = 0;
    switch (operation) {
      case 'add':
        calculatedResult = operand1 + operand2;
        break;
      case 'subtract':
        calculatedResult = operand1 - operand2;
        break;
      case 'multiply':
        calculatedResult = operand1 * operand2;
        break;
      case 'divide':
        calculatedResult = operand1 / operand2;
        break;
      default:
        console.log('Invalid operation');
    }
    setOperand1(calculatedResult);
    setResult(calculatedResult);
    console.log(calculatedResult)
  };

  return (
    <ImageBackground
      source={require('./assets/castle.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
     33
        <Text style={styles.title}>Calc</Text>
        <View style={styles.calcscreen}>
          <View style={styles.buttonrow}>
            <TouchableOpacity onPress={clear} style={styles.circle}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>+ / -</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>%</Text>
            </View>
            <TouchableOpacity onPress={divide} style={styles.circle}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            <TouchableOpacity onPress={() => handleInput(7)} style={styles.circle}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(8)} style={styles.circle}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(9)} style={styles.circle}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={multiply} style={styles.circle}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            <TouchableOpacity onPress={() => handleInput(4)} style={styles.circle}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(5)} style={styles.circle}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(6)} style={styles.circle}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={subtract} style={styles.circle}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            <TouchableOpacity onPress={() => handleInput(1)} style={styles.circle}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(2)} style={styles.circle}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleInput(3)} style={styles.circle}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={add} style={styles.circle}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>P</Text>
            </View>
            <TouchableOpacity onPress={() => handleInput(0)} style={styles.circle}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>.</Text>
            </View>
            <TouchableOpacity onPress={compute} style={styles.circle}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Ensure it covers the entire screen
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  calcscreen: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,  // Outline border
    borderColor: 'white', // White border
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Make background transparent
  },
  buttonText: {
    color: 'white', // White text
    fontWeight: 'bold', // Bold text
  },
});

export default Calculator;
