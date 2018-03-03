import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const baseContainer = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#ccc',
};

const baseText = {
  fontSize: 24,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    ...baseContainer,
  },
  enterButton: {
    flex: 2,
    backgroundColor: 'orange',
    ...baseContainer,
  },
  specialContainer: {
    flex: 1,
    backgroundColor: 'orange',
    ...baseContainer,
  },
  text: baseText,
  specialText: {
    ...baseText,
    color: '#fff',
  },
  wordButtonText: {
    ...baseText,
    fontSize: 20,
  },
});

const Button = ({
  enterButton, special, specialWord, text, onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={
      enterButton && special
        ? styles.enterButton
        : special ? styles.specialContainer : styles.container
    }
  >
    <Text style={specialWord ? styles.wordButtonText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
