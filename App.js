import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';
import firebase from 'firebase'

export default class App extends Component {

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyAiBLt5YUesUT_xmn2-BTWXN1ZqNSzow7Y",
      authDomain: "one-time-password-40ce7.firebaseapp.com",
      databaseURL: "https://one-time-password-40ce7.firebaseio.com",
      projectId: "one-time-password-40ce7",
      storageBucket: "one-time-password-40ce7.appspot.com",
      messagingSenderId: "255546426942",
      appId: "1:255546426942:web:9fa262c22cdd8c4a"
    };
    
    firebase.initializeApp(firebaseConfig);
  }

  render () {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
