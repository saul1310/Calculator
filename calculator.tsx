
import {Text,View,StyleSheet,Button,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
const Calculator = () =>{
    const [input, setInput] = useState( 0 );

    const [operand1, setOperand1] = useState(0)

    const [operand2, setOperand2] = useState(0)

    const [operation, setoperation] = useState(0);

    const [result,setResult] = useState( null);

    const handleInput = (x) => {
        // Record what has been pressed, if integer add to operand, 
        // if operation change operand

        //if operand 1 has data, use operand 2
        console.log("Recieved the number",x);
        setOperand1(x);
        console.log("the stored operand is",operand1);


    };

    const clear = () => {
        // Delete all stored variables
        console.log(operand1)


    };

    return(
        <View style = {styles.container}>
            <View style = {styles.calcscreen}>
                <Text> Calc</Text>
                <View style = {styles.buttonrow}>
                <TouchableOpacity onPress={clear} style={styles.circle}>
                <Text>AC</Text>
                </TouchableOpacity> 


                    <View style = {styles.circle}> <Text> + / -</Text></View>
                    <View style = {styles.circle}> <Text> %</Text></View>
                    <View style = {styles.circle}> <Text>/ </Text></View>
                </View>
                <View style = {styles.buttonrow}>
                    <TouchableOpacity onPress={()=> handleInput(5)}>
                    <View style = {styles.circle}> <Text> 7</Text></View>
                    </TouchableOpacity>
                    <View style = {styles.circle}> <Text> 8</Text></View>
                    <View style = {styles.circle}> <Text> 9</Text></View>
                    <View style = {styles.circle}> <Text> X</Text></View>
                </View>
                <View style = {styles.buttonrow}>
                    <View style = {styles.circle}> <Text> 4</Text></View>
                    <View style = {styles.circle}> <Text> 5</Text></View>
                    <View style = {styles.circle}> <Text> 6</Text></View>
                    <View style = {styles.circle}> <Text> -</Text></View>
                </View>
                <View style = {styles.buttonrow}>
                    <View style = {styles.circle}> <Text> 1</Text></View>
                    <View style = {styles.circle}> <Text> 2</Text></View>
                    <View style = {styles.circle}> <Text> 3</Text></View>
                    <View style = {styles.circle}> <Text> +</Text></View>
                </View>
                <View style = {styles.buttonrow}>
                    <View style = {styles.circle}> <Text> P</Text></View>
                    <View style = {styles.circle}> <Text> 0</Text></View>
                    <View style = {styles.circle}> <Text> .</Text></View>
                    <View style = {styles.circle}> <Text> =</Text></View>
                </View>
            </View>



        </View>





    );



};
const styles = StyleSheet.create({
    container: {
      flex: 1, // Ensures the container fills the entire screen
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // Optional: Set a background color for the container
    },
    calcscreen: {
      height: 700,
      width: 300,
      backgroundColor: 'green', // Ensures the green box is visible
    },

    buttonrow: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding: 30,
      
        


    },

    circle: {
        height :  50,
        width : 50,
        borderRadius :30,
        backgroundColor : 'yellow',
        justifyContent : 'center',
        alignItems :'center',

    }
  });

export default Calculator;