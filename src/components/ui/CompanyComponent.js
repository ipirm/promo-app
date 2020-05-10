import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export const CompanyComponent = ({item, onOpen}) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
            <View style={{...styles.wrapper}}>
                <View style={styles.text}>
                    <Text style={styles.textCustom}> Одежда и обувь </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderBottomColor: '#9B9B9B',
        borderBottomWidth: 0.4,
    },
    text: {
        alignItems: 'center',
        flex: 1,
        height: 47,
        justifyContent: 'center'
    },
    textCustom: {
        fontSize: 16,
        color: '#222222',

    }
})
