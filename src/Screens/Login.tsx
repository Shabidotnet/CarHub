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
import {SigninWithEmailPassword} from '../Firebase/AuthMethods';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignInPressed = async () => {
    if (email !== '' && password !== '') {
      if (!isValidEmail(email)) {
        alert('Email is Not Valid');
        return;
      }

      try {
        const response = await SigninWithEmailPassword(email, password);
        console.log('Response', response);
        if (response == 'Sign Successfully') {
          navigation.navigate('Home');
        }
      } catch (error) {
        if (error.code == 'auth/invalid-credential') {
          alert('invalid-credential');
        } else if (error.code == 'auth/invalid-credential') {
        }
      }
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

      <CustumButton
        title={'SignIn'}
        txtStyle={styles.btnTextStyle}
        style={styles.botton}
        onPress={() => SignInPressed()}
      />
      <Pressable>
        <Text style={styles.forgetTxt}>{strings.forget_Password}</Text>
      </Pressable>
      <View style={{flex: 1}} />

      <View style={styles.container}>
        <Text style={styles.accountText}>
          {strings.did_not_have_account}
          <Text
            style={styles.loginBtn}
            onPress={() => navigation.navigate('SignUp')}>
            {strings.singUp}
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;

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
