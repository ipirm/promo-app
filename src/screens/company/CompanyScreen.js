import React, {useState} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../../components/AppHeaderIcon"
import {CompanyComponent} from "../../components/ui/CompanyComponent"

export const CompanyScreen = ({navigation}) => {

    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }

    const openPostHandler = props => {
        navigation.navigate('CompanyInsideScreen')
    }

    return (
        <ScrollView style={styles.mainView} onContentSizeChange={onContentSizeChange}>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
            <CompanyComponent onOpen={openPostHandler}/>
        </ScrollView>
    )
}
CompanyScreen.navigationOptions = {

    headerTitle: 'Компании',
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
