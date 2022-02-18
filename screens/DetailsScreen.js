import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function DetailsScreen({navigation}) {
  const [fname, onChangeFname] = useState('');
  const [lname, onChangeLname] = useState('');
  const [number, onChangeNumber] = useState(null);
  const fnameInputHandler = enteredText => {
    onChangeFname(enteredText);
  };
  const lnameInputHandler = enteredText => {
    onChangeLname(enteredText);
  };
  const numberInputHandler = enteredText => {
    onChangeNumber(enteredText);
  };
  const arr = [fname, lname, number];
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={fnameInputHandler}
        placeholder="First Name"
        value={fname}
      />
      <TextInput
        style={styles.input}
        onChangeText={lnameInputHandler}
        value={lname}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={numberInputHandler}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Button
        title="Save"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DetailsScreen;
