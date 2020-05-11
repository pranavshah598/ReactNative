import React, { Component } from 'react';
import { View, Image, TextInput, FlatList, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';
export class CountryInformation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            country: ''
        }
        this.countryInformationUrl = 'https://restcountries.eu/rest/v2/name/'
        this.data = this.props.navigation.state.params.data
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.rowItem}>
                        <Text style={styles.textStyle}>capital</Text>
                        <Text style={styles.textStyle}>{item.capital}</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={styles.textStyle}>Population</Text>
                        <Text style={styles.textStyle}>{item.population}</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.rowItem}>
                        <Text style={styles.textStyle}>latitude longitude</Text>
                        <Text style={styles.textStyle}>{`${item.latlng[0]}, ${item.latlng[1]} `}</Text>
                    </View>
                    <View style={styles.rowItem}>
                        <Text style={styles.textStyle}>Population</Text>
                        <Text style={styles.textStyle}>{item.population}</Text>
                    </View>
                </View>
            </View>

        )
    }

    CapitalWeather = () => {
        this.props.navigation.navigate('CountryWeather', { city: this.data[0].capital })
    }


    render() {
        return (

            <View style={styles.fullArea}>
                <FlatList
                    data={this.data}
                    style={styles.fullArea}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <Button onPress={this.CapitalWeather} full rounded style={styles.buttonStyle}><Text>Capital Weather</Text></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    rowContainer: {
        flexDirection: 'row'
    },
    rowItem: { flex: 1 },
    textStyle: {
        color: 'black',
        fontSize: 22
    },
    fullArea: { flex: 1 },
    buttonStyle: {
        marginBottom: 20,
        marginHorizontal: 15
    }
});