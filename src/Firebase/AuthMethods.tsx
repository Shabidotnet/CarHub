import auth from '@react-native-firebase/auth';
import {addUser} from './database';

export const SignUpWithEmailPassword = async (email, password) => {
  console.log(email, password);
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      addUser(res?.user?.uid);
      return 'User Created Successfully';
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('error', error);
        return error;
      }

      if (error.code === 'auth/invalid-email') {
        console.log('error', error);

        return error.code;
      }

      console.error(error);
    });
};

export const SigninWithEmailPassword = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return 'Sign Successfully';
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('error', error);
      throw new Error('Email already in use');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('error', error);
      throw new Error('Invalid email');
    }

    console.error(error);
    throw error;
  }
};

export const Logout = () => {
  auth().signOut();
};
