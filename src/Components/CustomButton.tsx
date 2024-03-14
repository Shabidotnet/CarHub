import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../utilies/scale';
const CustumButton = ({title, style, onPress, txtStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      <Text style={[styles.mainTxt, txtStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustumButton;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'green',
    height: scale(44),
    width: '100%',
    borderRadius: scale(10),
    marginVertical: scale(10),
    justifyContent: 'center',
  },
  mainTxt: {
    color: '#fff',
    alignSelf: 'center',
  },
});
