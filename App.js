// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './screens/DetailsScreen';
import { useRoute } from '@react-navigation/native';

const HomeScreen = props => {
  const [len, setLength] = useState(0);
  const [changeState, setChangeState] = useState(0);

  var arr = [];
  console.log(arr);



  if (typeof props.route.params !== 'undefined') {
    arr = props.route.params;
    // console.log(props.route.params);
    // var temp = [];
    // temp.push(...arr);
    console.log(arr);
    console.log(len);
  }
  const buttonPressed = () => {
    setLength(arr.length);
    props.navigation.navigate('Details', arr);
  };

  return (
    <View style={styles.screen}>
      <View style={{ width: '100%', alignItems: 'center', fontSize: 40 }}>
        <Text style={{ fontSize: 30, color: 'blue', marginBottom: 10 }}>
          User Details
        </Text>
        <FlatList
          data={arr}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>First Name: {item.fname}</Text>
                <Text>Last Name: {item.lname}</Text>
                <Text>Contact: {item.number}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{ width: '40%', margin: 'auto' }}>
        <Button title="Add User" disabled={len === 9} onPress={buttonPressed} />
      </View>
    </View>
  );
};

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
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 50,
  },
});

export default App;
