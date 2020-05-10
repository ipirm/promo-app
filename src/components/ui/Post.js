import React from 'react'
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';


export const Post = ({item,onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>onOpen(item)}>
        <View style={{...styles.post}}>
            <Image style={styles.image} source={{uri: item.thumbnailUrl}}/>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>TITLE{"\n"}<Text style={styles.text}>{item.title.slice(0,40)}</Text></Text>
                <View style={styles.elevatedElement}><Text style={styles.elevatedText}> 30% </Text></View>
            </View>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    elevatedElement: {
        backgroundColor: "#1EDA31",
        width: 41.87,
        height: 33.74,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -5,
        flex: 1,
        marginLeft: 10
    },
    elevatedText: {
        // fontFamily: "Source Sans Pro",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 23,
        color: "#FFFFFF"
    },
    post: {
        marginBottom: 10,
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    image: {
        width: 122,
        height: 110,
    },
    textWrapper: {
        paddingVertical: 5,
        backgroundColor: '#fff',
        width: '100%',
        flex:1,
        flexDirection: 'row',
        paddingLeft: 8
    },
    text: {
        color: '#000',
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: 'normal',
        lineHeight: 13
    },
    title: {
        flex: 4,
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 18,
        marginBottom: 40
    },
})
