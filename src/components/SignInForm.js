import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Input, Button} from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

const BASE_URL = 'https://us-central1-one-time-password-40ce7.cloudfunctions.net/';

export default class SignInForm extends Component {

    state = { 'phone' : '', code : ''}

    handleSubmit = async () => {
        try {
            let {data} = await axios.post(BASE_URL+'verifyOTP', {phone : this.state.phone, code : this.state.code})

            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {

        }
    }

    render() {
        return(
            <View>
                <View>
                    <Input 
                        label="Enter Phone Number"
                        value={this.state.phone}
                        onChangeText={(text) => this.setState({phone : text})}/>
                </View>
                <View>
                    <Input 
                        label="Enter Code"
                        value={this.state.code}
                        onChangeText={(text) => this.setState({code : text})}/>
                </View>
                <Button onPress={this.handleSubmit} title="Submit"/>
            </View>
        )
    }
}