
import {Text,View,StyleSheet,Button,TouchableOpacity,Dimensions,Image,ImageBackground} from 'react-native';
import React, {useState} from 'react';

const { width, height } = Dimensions.get('window');



const Calculator = () =>{
    <Image source={require('./assets/home.png')}/>

    
    const [input, setInput] = useState( 0 );

    const [operand1, setOperand1] = useState(0)

    const [operand2, setOperand2] = useState(0)

    const [operation, setoperation] = useState("");

    const [result,setResult] = useState( 0);


    const handleInput = (x) => {
        // Record what has been pressed, if integer add to operand, 
        // if operation change operand

        //if operand 1 has data, use operand 2

        if (operand1 === 0) {
       
            setOperand1(x)
            console.log("setting operand 1 to",x)
        }
        else{
            setOperand2(x)
            console.log(" operand2 set to",x)


        };

        // console.log("Recieved the number",x);
        // setOperand1(x);
        // console.log("the stored operand is",operand1);


    };

    const clear = () => {
        // Delete all stored variables
        setOperand1(0)
        setOperand2(0)
        setoperation("")
        console.log(" All values cleared")



    };

    const add = () => {
        setoperation("add")
        console.log(" Operation changed to +")


    };

    const subtract = () => {
        setoperation("subtract")
        console.log("operation set to subtract")


    };


    const multiply = () =>{
        setoperation("multiply")
        console.log(" operation set to to multiplication")


    };

    const divide = () => {
        setoperation("divide")
        console.log(" operation set to divide")

    };

    const compute = () => {
        let calculatedResult = 0;

        switch(operation) {

            case "add":
               
                calculatedResult = operand1 + operand2;
                setOperand1(calculatedResult)
                console.log(calculatedResult)
                break;

            case "subtract" :
                calculatedResult = operand1 - operand2
                setOperand1(calculatedResult)
                console.log(calculatedResult)

            case "multiply":
                calculatedResult = operand1 * operand2
                setOperand1(calculatedResult)
                console.log(calculatedResult)
                break;

            case "divide" :
                calculatedResult = operand1 / operand2
                setOperand1( calculatedResult)
                console.log(calculatedResult) 

            

            default:
                console.log("Invalid operation");
                calculatedResult = 0;




        }

        setResult(calculatedResult)



        
    };

    return(
        <View style = {styles.container}>
          

            
           
    
            <View style = {styles.calcscreen}>
            <ImageBackground 
      source={require('./assets/home.png')} // Replace with the path to your local image
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to the App!</Text>
      </View>
    </ImageBackground>
                <Text> Calc</Text>
                <View style = {styles.buttonrow}>
                <TouchableOpacity onPress={clear} style={styles.circle}>
                <Text>AC</Text>
                </TouchableOpacity> 

               
                    <View style = {styles.circle}> <Text> + / -</Text></View>
                  
                    <View style = {styles.circle}> <Text> %</Text></View>
                    <TouchableOpacity onPress ={divide}>
                    <View style = {styles.circle}> <Text>/ </Text></View>
                    </TouchableOpacity>
                  
                </View>
                <View style = {styles.buttonrow}>
                    <TouchableOpacity onPress={()=> handleInput(7)}>
                    <View style = {styles.circle}> <Text> 7</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleInput(8)}>
                    <View style = {styles.circle}> <Text> 8</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleInput(9)}>
                    <View style = {styles.circle}> <Text> 9</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={multiply}>
                    <View style = {styles.circle}> <Text> X</Text></View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonrow}>
                    <TouchableOpacity onPress = {() => handleInput(4)}>
                    <View style = {styles.circle}> <Text> 4</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => handleInput(5)}>
                    <View style = {styles.circle}> <Text> 5</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => handleInput(5)}>
                    <View style = {styles.circle}> <Text> 6</Text></View>
                    </TouchableOpacity>
                
                    <View style = {styles.circle}> <Text> -</Text></View>
                </View>
                <View style = {styles.buttonrow}>
                <TouchableOpacity onPress = {() => handleInput(1)}>
                    <View style = {styles.circle}> <Text> 1</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => handleInput(2)}>
                    <View style = {styles.circle}> <Text> 2</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => handleInput(3)}>
                    <View style = {styles.circle}> <Text> 3</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={add}>
                    <View style = {styles.circle}> <Text> +</Text></View>
                    </TouchableOpacity>
                </View>
                <View style = {styles.buttonrow}>
                    <View style = {styles.circle}> <Text> P</Text></View>
                    <TouchableOpacity onPress = {() => handleInput(0)}>
                    <View style = {styles.circle}> <Text> 0</Text></View>
                    </TouchableOpacity>
                    <View style = {styles.circle}> <Text> .</Text></View>
                    <TouchableOpacity onPress= {compute}>
                    <View style = {styles.circle}> <Text> =</Text></View>
                    </TouchableOpacity>
                </View>
            </View>



        </View>





    );



};
const styles = StyleSheet.create({
    background: {
        flex: 1, // Make it fill the entire screen
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
      },
    container: {
      flex: 1, // Ensures the container fills the entire screen
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // Optional: Set a background color for the container
    },
    calcscreen: {
      height: height,
      width: width,
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

    },

    backgroundImage: {
        flex: 1, // Ensures the image covers the entire screen
        justifyContent: 'center', // Centers the content
        alignItems: 'center',
        },
        overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a slight dark overlay on top of the image
        padding: 20,
        borderRadius: 10,
        },
        text: {
        color: 'white',
        fontSize: 24,
        },
  });

export default Calculator;