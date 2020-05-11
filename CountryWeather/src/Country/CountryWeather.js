import React, { Component } from 'react';
import { View, Image, TextInput, FlatList, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';
export class CountryWeather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Weather: {
                temperature: '',
                wind_speed: '',
                precip: 0,
                weather_icons: []
            }
        }
    }

    CheckError = (response) => {
        if (response.status >= 200 && response.status <= 299) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    }

    componentWillMount() {
        this.weatherInformationUrl = `http://api.weatherstack.com/current?access_key=81f3eb849e3386d50e5f6070384da511&query=${this.props.navigation.state.params.city}`
        fetch(this.weatherInformationUrl, { method: 'GET' })
            .then(CheckError)
            .then((value) => {
                this.setState({ Weather: value.current })
            })
            .catch((err) => {
                alert('data not found');
                console.log('error ' + err)
            })
    }

    renderWeatherImages = (value) => {
        return value.map(Img => {
            return (<Image source={{ uri: Img }} style={styles.imageStyle} />)
        })
    }


    render() {
        const { temperature, weather_icons, wind_speed, precip } = this.state.Weather
        return (

            < View style={styles.mainContainer} >
                <View style={styles.rowContainer}>
                    <View style={styles.fullArea}>
                        <Text>Temperature</Text>
                        <Text>{temperature}</Text>
                    </View>
                    <View style={styles.fullArea}>
                        <Text>Weather Icon</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {this.renderWeatherImages(weather_icons)}
                        </View>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.fullArea}>
                        <Text>Wind Speed</Text>
                        <Text>{wind_speed}</Text>
                    </View>
                    <View style={styles.fullArea}>
                        <Text>precip</Text>
                        <Text>{precip}</Text>
                    </View>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 15
    },
    rowContainer: { flexDirection: 'row' },
    fullArea: { flex: 1 },
    imageStyle: {
        height: 60,
        width: 60
    }
})