import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../components/AppHeaderIcon"
import {AppText} from "../components/ui/text/AppText"

export const FavoritesScreen = () => {

    return (
        <ScrollView style={styles.mainView}>
            <AppText> Akzii </AppText>
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
