import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from './Button';
import { pressNum, enter, operation, clear, swap, toggleNegative } from './modules';

const baseNumber = {
  backgroundColor: '#424242',
  textAlign: 'right',
  padding: 10,
  fontSize: 30,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: '#424242',
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
  },
  bottom: {
    flex: 1,
  },
  number: {},
  append: {
    color: '#fff',
    ...baseNumber,
  },
  push: { color: '#9bc23c', ...baseNumber },
  replace: { color: '#2e71e5', ...baseNumber },
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

class Main extends React.Component {
  render() {
    const {
      calculatorState: { stack, inputState },
      pressNumWithDispatch,
      enterAction,
      operationAction,
      clearAction,
      swapAction,
      toggleNegativeAction,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.textBottomBorder}>
            <TouchableOpacity onPress={() => toggleNegativeAction(2)}>
              <Text numberOfLines={1} style={styles.append}>
                {'  '}
                {stack[2] || '0'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textBottomBorder}>
            <TouchableOpacity onPress={() => toggleNegativeAction(1)}>
              <Text numberOfLines={1} style={styles.append}>
                {'  '}
                {stack[1] || '0'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textBottomBorder}>
            <TouchableOpacity onPress={() => toggleNegativeAction(0)}>
              <Text numberOfLines={1} style={styles[inputState]}>
                {'  '}
                {stack[0] || '0'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Button text="clear" onPress={clearAction} special specialWord />
            <Button text="power" onPress={operationAction} specialWord />
            <Button text="swap" onPress={swapAction} specialWord />
            <Button text="/" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="9" onPress={pressNumWithDispatch} />
            <Button text="8" onPress={pressNumWithDispatch} />
            <Button text="7" onPress={pressNumWithDispatch} />
            <Button text="x" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="6" onPress={pressNumWithDispatch} />
            <Button text="5" onPress={pressNumWithDispatch} />
            <Button text="4" onPress={pressNumWithDispatch} />
            <Button text="-" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="3" onPress={pressNumWithDispatch} />
            <Button text="2" onPress={pressNumWithDispatch} />
            <Button text="1" onPress={pressNumWithDispatch} />
            <Button text="+" onPress={operationAction} />
          </View>
          <View style={styles.row}>
            <Button text="0" onPress={pressNumWithDispatch} />
            <Button text="." onPress={pressNumWithDispatch} />
            <Button text="enter" onPress={enterAction} special enterButton />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({ calculatorState: state }),
  dispatch =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressNum,
        enterAction: enter,
        operationAction: operation,
        clearAction: clear,
        swapAction: swap,
        toggleNegativeAction: toggleNegative,
      },
      dispatch,
    ),
)(Main);
