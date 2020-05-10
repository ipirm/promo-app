import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export const CategotyComponent = ({item, onOpen}) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
            <View style={{...styles.wrapper}}>
                <View style={styles.text}>
                    <Text> Одежда и обувь </Text>
                </View>
                <Image style={styles.image} source={{uri: 'https://via.placeholder.com/150/92c952'}}/>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: 90,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginTop: 10
    },
    text: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
