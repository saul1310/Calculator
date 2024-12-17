import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
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
      } else {
        setOperand2(x);
      }
    };
  
    const clear = () => {
      setOperand1(0);
      setOperand2(0);
      setOperation('');
    };
  
    const add = () => setOperation('add');
    const subtract = () => setOperation('subtract');
    const multiply = () => setOperation('multiply');
    const divide = () => setOperation('divide');
  
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
    };
  
    return (
      <ImageBackground
        source={require('./assets/castle.jpeg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Calc</Text>
          <View style={styles.calcscreen}>
            <View style={styles.buttonrow}>
              <ImageBackground source={require('./assets/chrome.jpeg')}>
              <TouchableOpacity onPress={clear} style={styles.circle}>
                <Text>AC</Text>

              </TouchableOpacity>
              </ImageBackground>
              <View style={styles.circle}>
                <Text>+ / -</Text>
              </View>
              <View style={styles.circle}>
                <Text>%</Text>
              </View>
              <TouchableOpacity onPress={divide}>
                <View style={styles.circle}>
                  <Text>/</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonrow}>
              <TouchableOpacity onPress={() => handleInput(7)}>
                <View style={styles.circle}>
                  <Text>7</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(8)}>
                <View style={styles.circle}>
                  <Text>8</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(9)}>
                <View style={styles.circle}>
                  <Text>9</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={multiply}>
                <View style={styles.circle}>
                  <Text>X</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonrow}>
              <TouchableOpacity onPress={() => handleInput(4)}>
                <View style={styles.circle}>
                  <Text>4</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(5)}>
                <View style={styles.circle}>
                  <Text>5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(6)}>
                <View style={styles.circle}>
                  <Text>6</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={subtract}>
                <View style={styles.circle}>
                  <Text>-</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonrow}>
              <TouchableOpacity onPress={() => handleInput(1)}>
                <View style={styles.circle}>
                  <Text>1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(2)}>
                <View style={styles.circle}>
                  <Text>2</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(3)}>
                <View style={styles.circle}>
                  <Text>3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={add}>
                <View style={styles.circle}>
                  <Text>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonrow}>
              <View style={styles.circle}>
                <Text>P</Text>
              </View>
              <TouchableOpacity onPress={() => handleInput(0)}>
                <View style={styles.circle}>
                  <Text>0</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.circle}>
                <Text>.</Text>
              </View>
              <TouchableOpacity onPress={compute}>
                <View style={styles.circle}>
                  <Text>=</Text>
                </View>
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
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default Calculator;
  