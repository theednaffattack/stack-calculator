import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

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

class Button extends React.Component {
  render() {
    const {
      enterButton, special, specialWord, text, onPress,
    } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.text.rubberBand(400);
          onPress(text);
        }}
        style={
          enterButton && special
            ? styles.enterButton
            : special ? styles.specialContainer : styles.container
        }
      >
        <Animatable.Text
          ref={ref => (this.text = ref)}
          style={specialWord ? styles.wordButtonText : styles.text}
        >
          {text}
        </Animatable.Text>
      </TouchableOpacity>
    );
  }
}
export default Button;
