import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

function DetailsScreen(props) {
  const [fname, setChangeFname] = useState('');
  const [lname, setChangeLname] = useState('');
  const [number, setChangeNumber] = useState();
  // const [changeState, setChangeState] = useState();
  var newData = props.route.params;

  var oldData = [{fname: fname, lname: lname, number: number}];

  const details = () => {
    if (typeof newData !== 'undefined') {
      console.log(newData);
      newData.push.apply(newData, oldData);
    } else {
      // console.log(newData);
      newData.push(oldData);
    }

    console.log(newData);
    // oldData.push.apply(newData, oldData);
    // setChangeState(true);
    props.navigation.navigate('Home', newData);
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
      <View style={{marginVertical: 10}}>
        <Button title="Save" onPress={details} />
      </View>
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
