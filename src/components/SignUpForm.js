import React, {Component} from 'react'
import {View, Text} from 'react-native'
import { Input, Button} from 'react-native-elements'
import axios from 'axios'

const BASE_URL = 'https://us-central1-one-time-password-40ce7.cloudfunctions.net/';

export default class SignUpForm extends Component {

    state = { 'phone' : ''}

    handleSubmit = async () => {
        try {
            await axios.post(BASE_URL+'createUser',{phone : this.state.phone})
            await axios.post(BASE_URL+'requestOTP', {phone : this.state.phone})

        } catch(err) {
            console.log(err)
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
                <Button onPress={this.handleSubmit} title="Submit"/>
            </View>
        )
    }
}