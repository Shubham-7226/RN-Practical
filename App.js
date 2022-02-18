// In App.js in a new project

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen';

function HomeScreen(props, route) {
  // const {fname, lname, number} = route.params;
  return (
    <View style={styles.screen}>
      <View style={styles.textSize}>
        <Text>User Details</Text>
      </View>
      <Button
        title="Add User"
        onPress={() => {
          props.navigation.navigate('Details');
        }}
      />
      <View>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textSize: {
    fontSize: '30',
  },
});

export default App;
