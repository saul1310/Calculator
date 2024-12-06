
import {Text,View,StyleSheet} from 'react-native';
import React from 'react';
const Calculator = () =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.calcscreen}>
                <Text> HEy</Text>
            </View>



        </View>





    );



};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center',


    },

    calcscreen : {
        height :  100,
        width :  100,
        backgroundColor :' green',



    }



});

export default Calculator;