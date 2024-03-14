import firestore from '@react-native-firebase/firestore';
export const addUser = async id => {
  try {
    firestore().collection('Users').doc();

    console.log('User added successfully!');
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};
