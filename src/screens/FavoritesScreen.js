import React from 'react'
import {StyleSheet, ScrollView,Text} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
export const FavoritesScreen = () => {
    return (
        <ScrollView style={styles.mainView}>
            <Text> Akzii </Text>
        </ScrollView>
    )
}
FavoritesScreen.navigationOptions = {
    headerTitle: 'Акции',
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
