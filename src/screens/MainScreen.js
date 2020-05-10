import React, {useState} from 'react'
import {StyleSheet, ScrollView} from 'react-native';
import {DATA} from "../mockData/data";
import {Post} from "../components/ui/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('List', {postId: post.id, like: post.like})
    }
    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }
    return (
        <ScrollView style={styles.mainView} onContentSizeChange={onContentSizeChange}>
            {DATA.map((value, index) => {
                return <Post key={index} item={value} onOpen={openPostHandler}/>
            })}</ScrollView>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'Главная',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item iconName="ios-search" title="Search" onPress={() => alert('This is a button!')}/>
        </HeaderButtons>
    ),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item iconName="ios-mail" title="Send" onPress={() => alert('This is a button!')}/>
        </HeaderButtons>
    )
}
const styles = StyleSheet.create({
    mainView: {
        marginTop: 10
    }
})
