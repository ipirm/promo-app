import React, {useState} from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {DATA} from "../mockData/data";

export const ListScreen = ({route,navigation}) => {
    const {postId} = route.params;
    const post = DATA.find(i => i.id === postId);

    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }

    // React.useLayoutEffect(() => {
    //     navigation.setParams({like: post.like});
    // }, []);

    return (
        <ScrollView onContentSizeChange={onContentSizeChange}>
            <View>
                <Image style={styles.image} source={{uri: post.thumbnailUrl}}/>
                <View style={styles.overlayText}>
                    <Text style={styles.mainText}>{post.title} </Text>
                    <View style={styles.overlayDate}>
                        <Text style={styles.dateText}>Скидка действует: с 01.02.2020 по 03.04.2020 </Text>
                    </View>
                </View>
                <View style={styles.elevatedElement}><Text style={styles.elevatedText}> 30% </Text></View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    overlayText: {
        width: '100%',
        flex: 1,
        padding: 8
    },
    elevatedElement: {
        backgroundColor: "#1EDA31",
        width: 50.87,
        height: 33.74,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 6,
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
    mainText: {
        // fontFamily: "Source Sans Pro",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        color: "#000000"
    },
    dateText: {
        // fontFamily: "Source Sans Pro",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 13,
        color: "#989898"
    },
    overlayDate: {
        marginTop: 15
    }
})
