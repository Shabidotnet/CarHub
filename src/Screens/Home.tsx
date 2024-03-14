import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logout} from '../Firebase/AuthMethods';
const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}} onPress={Logout}>
        Home
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
