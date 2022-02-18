import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

function DetailsScreen(props) {
  const [fname, setChangeFname] = useState('first name');
  const [lname, setChangeLname] = useState('last name');
  const [number, setChangeNumber] = useState(8989898555);

  // const arr = [fname, lname, number];
  const details = () => {
    props.navigation.navigate('Home', {
      // fname: fname,
      // lname: lname,
      // number: number,
    });
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={Text => setChangeFname(Text)}
        placeholder="First Name"
        value={fname}
      />
      <TextInput
        style={styles.input}
        onChangeText={Text => setChangeLname(Text)}
        value={lname}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={Text => setChangeNumber(Text)}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <Button title="Save" onPress={details} />
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
