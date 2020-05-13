import React from 'react'
import {StyleSheet, View, Image,TouchableOpacity} from 'react-native'
import {THEME} from "../../variables/theme"
import {AppText} from "./text/AppText";
import {AppTextBold} from "./text/AppTextBold";


export const Post = ({item,onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>onOpen(item)}>
        <View style={{...styles.post}}>
            <Image style={styles.image} source={{uri: 'https://via.placeholder.com/150/92c952'}}/>
            <View style={styles.textWrapper}>
                <AppText style={styles.title}>{item.title}{"\n"}<AppText style={styles.text}>{item.body.slice(0,40)}</AppText></AppText>
                <View style={styles.elevatedElement}><AppTextBold style={styles.elevatedText}> 30% </AppTextBold></View>
            </View>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    elevatedElement: {
        backgroundColor: THEME.GREEN_COLOR,
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
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 23,
        color: THEME.WHITE_COLOR
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
        backgroundColor: THEME.WHITE_COLOR,
        width: '100%',
        flex:1,
        flexDirection: 'row',
        paddingLeft: 8
    },
    text: {
        color: THEME.BLACK_COLOR,
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: 'normal',
        lineHeight: 13
    },
    title: {
        flex: 4,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold',
        lineHeight: 18,
        marginBottom: 40
    },
})
