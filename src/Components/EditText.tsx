import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from '../utilies/scale';
const EditText = ({
  placeholder,
  secureTextEntry,
  inputstyles,
  RightIcon,
  keyboardType,
  onPress,
  onChangeText = () => {},
  value,
}) => {
  return (
    <View style={[styles.mainContainer, inputstyles]}>
      <TextInput
        style={styles.mainView}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        keyboardType={keyboardType}
        // keyboardType={}
        secureTextEntry={secureTextEntry}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

      {/* {RightIcon ? (
        <TouchableOpacity style={{marginRight: scale(12)}} onPress={onPress}>
          {!secureTextEntry ? (
            <Image source={Icons.openEye} style={styles.iconStyle} />
          ) : (
            <Image source={Icons.closeEye} style={styles.iconStyle} />
          )}
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};

export default EditText;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    height: scale(44),
    borderColor: 'gray',
    borderWidth: scale(1),
    borderRadius: scale(10),
    marginVertical: scale(15),
    alignItems: 'center',
  },
  mainView: {
    flex: 1,
    color: 'black',
    paddingLeft: scale(11),
  },
  iconStyle: {
    height: scale(20),
    width: scale(20),
    resizeMode: 'contain',
    tintColor: 'black',
  },
});
