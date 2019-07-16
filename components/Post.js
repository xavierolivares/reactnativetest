import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export function Post() {
    return (
        <View style={styles.container}> 
            <View style={styles.userDataContainer}>
                <Text style={styles.username}>Lil Dawg</Text>
                <Text style={styles.date}>11/12/19</Text>
            </View>
            <Text>Lorem Ipsum</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1
    },
    userDataContainer: {

    },
    username: {
        fontSize: 20
    },
    date: {

    }
})