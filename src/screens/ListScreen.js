import React, {useState} from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {DATA} from "../mockData/data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const ListScreen = ({navigation}) => {
    const postId = navigation.getParam('postId');
    const post = DATA.find(i => i.id === postId);

    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }


    return (
        <ScrollView onContentSizeChange={onContentSizeChange}>
            <View>
                <Image style={styles.image} source={{uri: post.thumbnailUrl}}/>
                <View style={styles.overlayText}>
                    <Text style={styles.mainText}>{post.title} </Text>
                    <View style={styles.overlayDate}>
                        <Text style={styles.dateText}>Скидка действует: с 01.02.2020 по 03.04.2020 </Text>
                    </View>
                    <View style={styles.elevatedElement}><Text style={styles.elevatedText}> 30% </Text></View>
                </View>
            </View>
        </ScrollView>
    )
}

ListScreen.navigationOptions = ({navigation}) => {
    const like = navigation.getParam('like')
    const iconName = like?  'ios-heart' : 'ios-heart-empty';
    return {
        headerTitle: 'Скидка',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item iconName={iconName} title="Search" onPress={() => alert('This is a button!')}/>
            </HeaderButtons>
        ),
    }
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    overlayText: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
        marginTop: 5,
        marginHorizontal: 8,
        borderRadius: 3
    },
    elevatedElement: {
        backgroundColor: "#1EDA31",
        width: 50.87,
        height: 33.74,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 10,
        flex: 1,
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
