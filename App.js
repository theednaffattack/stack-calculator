import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'papayawhip',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#fff',
    backgroundColor: '#424242',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBottomBorder: {
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <View style={styles.textBottomBorder}>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.textBottomBorder}>
        <Text style={styles.number}>1</Text>
      </View>
      <View style={styles.textBottomBorder}>
        <Text style={styles.number}>2</Text>
      </View>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" special specialWord />
        <Button text="power" specialWord />
        <Button text="swap" specialWord />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="9" />
        <Button text="8" />
        <Button text="7" />
        <Button text="x" />
      </View>
      <View style={styles.row}>
        <Button text="6" />
        <Button text="5" />
        <Button text="4" />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="3" />
        <Button text="2" />
        <Button text="1" />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" />
        <Button text="." />
        <Button text="enter" special enterButton />
      </View>
    </View>
  </View>
);

export default App;
