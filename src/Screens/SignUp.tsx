import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import EditText from '../Components/EditText';
import CustumButton from '../Components/CustomButton';
import {images} from '../Assets/images';
import {isValidEmail, scale} from '../utilies/scale';
import {strings} from '../Assets/Constants';
import {SignUpWithEmailPassword} from '../Firebase/AuthMethods';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('a');

  const SignInPressed = () => {
    if (email !== '' && password !== '' && confirmPassword !== '') {
      if (!isValidEmail(email)) {
        return;
      }
      if (password !== confirmPassword && password.length < 8) {
        return;
      }

      const response = SignUpWithEmailPassword(email, password);
      console.log('Response', response);
    } else {
      alert('Email and Password is required');
    }
  };
  return (
    <ImageBackground
      style={styles.mainContainer}
      resizeMode="cover"
      source={images.demoCar}>
      <Text style={styles.headingTxt}>{strings.welcome}</Text>
      <Text style={styles.headingTxt2}>{strings.to}</Text>
      <Text style={styles.headingTxt3}>{strings.carHub}</Text>

      <EditText
        inputstyles={styles.textInput}
        placeholder={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <EditText
        inputstyles={styles.textInput2}
        placeholder={'Password'}
        value={password}
        onChangeText={val => setPassword(val)}
      />
      <EditText
        inputstyles={styles.textInput2}
        placeholder={'Confirm Password'}
        value={password}
        onChangeText={val => setPassword(val)}
      />

      <CustumButton
        title={'Sign Up'}
        txtStyle={styles.btnTextStyle}
        style={styles.botton}
        onPress={() => SignInPressed()}
      />
      <View style={{flex: 1}} />
      <View style={styles.container}>
        <Text style={styles.accountText}>
          {strings.already_have_an_account}
          <Text
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Login')}>
            {strings.login}
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  textInput: {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginTop: scale(120),
    borderRadius: scale(30),
    paddingLeft: scale(10),
  },
  textInput2: {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    marginTop: scale(10),
    borderRadius: scale(30),
    paddingLeft: scale(10),
  },
  botton: {
    backgroundColor: 'white',
    borderRadius: scale(30),
  },
  btnTextStyle: {
    color: 'black',
    fontSize: scale(15),
    lineHeight: scale(18),
  },
  headingTxt: {
    color: 'yellow',
    textAlign: 'center',
    paddingTop: scale(120),
    fontSize: scale(30),
  },
  headingTxt2: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: scale(20),
  },
  headingTxt3: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: scale(35),
  },
  forgetTxt: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: scale(12),
    textDecorationLine: 'underline',
    paddingVertical: scale(10),
  },
  accountText: {
    color: 'white',
    fontSize: scale(12),
  },
  loginBtn: {
    color: 'yellow',
    fontSize: scale(15),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(20),
  },
});
