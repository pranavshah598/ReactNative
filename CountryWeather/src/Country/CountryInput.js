import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';

export class CountryInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: ''
        }
        this.countryInformationUrl = 'https://restcountries.eu/rest/v2/name/'
    }

    countryChange = (value) => {
        this.setState({ country: value })
    }
    
    CheckError = (response) => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    }

    submitClick = () => {
        const url = this.countryInformationUrl + this.state.country
        fetch(url, { method: 'GET' })
            .then(this.CheckError)
            .then((value) => {
                console.log(value);
                this.props.navigation.navigate('CountryInformation', { data: value })
            })
            .catch((err) => {
                alert('please enter valid country name')
            })
    }

    render() {
        return (
            <View style={styles.mainCContainer}>
                <TextInput placeholder='Enter country'
                    value={this.state.country}
                    onChangeText={this.countryChange}
                    style={styles.inputStyle} />
                <Button style={styles.buttonStyle}
                    disabled={this.state.country === '' ? true : false}
                    rounded
                    onPress={this.submitClick}><Text>Submit</Text></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainCContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    inputStyle: {
        color: 'black',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginTop: 20
    }
})