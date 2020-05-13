import React from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'

export const AppLoader = () =>(
    <View style={styles.center}>
        <ActivityIndicator/>
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
