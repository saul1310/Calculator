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
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (x) => {
    // Append the digit or decimal to the appropriate operand
    if (!operation) {
      setOperand1((prev) => (prev + x.toString()));
    } else {
      setOperand2((prev) => (prev + x.toString()));
    }
  };

  const clear = () => {
    // Clear all values and reset the calculator
    setOperand1("");
    setOperand2("");
    setOperation('');
    setResult(0);
  };

  const handleDecimal = () => {
    // Append a decimal point if it doesn't already exist in the current operand
    if (!operation) {
      if (!operand1.includes(".")) {
        setOperand1((prev) => prev + ".");
      }
    } else {
      if (!operand2.includes(".")) {
        setOperand2((prev) => prev + ".");
      }
    }
  };

  const handleModulo =()=> {
    setOperation("mod")
    console.log(" operation set to modulo")

  };

  const handleposneg =() => {
    //if operand 1 
      // if operand 1 > 0
    if (!operand2){
      if (Number(operand1) > 0){
      let num = Number(operand1)
      num -= 2*num
      
      setOperand1(String(num));
      }
      //if operand1 < 0
      else {
        let num = Number(operand1)
        num += 2*num
        setOperand1(String(num));

     

      

      };
    }
    // if operand2
    else if (operand2) {
      // if operand2 > 0
      if ( Number() > 0){
        let num = Number(operand2);
        num -= num *2
        setOperand2(String(num));



      }
      else {
        //if opernad 2 < 0
        let num = Number(operand2);
        num += num *2
        setOperand2(String(num))


      };


      


    }

    



  };

  const compute = () => {
    let calculatedResult = 0;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Invalid operation');
      return;
    }

    switch (operation) {
      case 'add':
        calculatedResult = num1 + num2;
        break;
      case 'subtract':
        calculatedResult = num1 - num2;
        break;
      case 'multiply':
        calculatedResult = num1 * num2;
        break;

      case 'mod':
        calculatedResult = num1 % num2;
        break;

      case 'divide':
        if (num2 === 0) {
          alert('Cannot divide by zero');
          return;
        }
        calculatedResult = num1 / num2;
        break;
      default:
        console.log('Invalid operation');
        return;
    }

    // Set the result as operand1 for chaining operations
    setOperand1(String(calculatedResult));
    setOperand2("");
    setOperation('');
    setResult(calculatedResult);
  };

  return (
    <ImageBackground
      source={require('./assets/castle.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.calcscreen}>
       
          <View style={styles.resultScreen}>
            <Text style={styles.resultText}>
              {operand2 || operand1 || result || "0"}
            </Text>
          </View>
          <View style={styles.buttonrow}>
            <TouchableOpacity onPress={clear} style={styles.circle}>
              <Text style={styles.buttonText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleposneg} style = {styles.circle}>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>+ / -</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress= {handleModulo} style = {styles.circle}>
            <View style={styles.circle}>
              <Text style={styles.buttonText}>%</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOperation('divide')} style={styles.circle}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            {[7, 8, 9].map((num) => (
              <TouchableOpacity key={num} onPress={() => handleInput(num)} style={styles.circle}>
                <Text style={styles.buttonText}>{num}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setOperation('multiply')} style={styles.circle}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            {[4, 5, 6].map((num) => (
              <TouchableOpacity key={num} onPress={() => handleInput(num)} style={styles.circle}>
                <Text style={styles.buttonText}>{num}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setOperation('subtract')} style={styles.circle}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            {[1, 2, 3].map((num) => (
              <TouchableOpacity key={num} onPress={() => handleInput(num)} style={styles.circle}>
                <Text style={styles.buttonText}>{num}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => setOperation('add')} style={styles.circle}>
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
            <TouchableOpacity onPress={handleDecimal} style={styles.circle}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
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
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calcscreen: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  resultScreen: {
    alignItems: 'flex-end',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  resultText: {
    fontSize: 32,
    color: 'white',
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
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Calculator;