import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Calculator from './calculator';

const Stack = createStackNavigator();

export default function App() {  
  return (


    <View style={styles.container}>
      <NavigationContainer>
	      <Stack.Navigator initialRouteName="Calculator">




	      </Stack.Navigator>
      </NavigationContainer>

      
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
