import React,{useState} from 'react'
import {StyleSheet, ScrollView, View} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../../components/AppHeaderIcon";
import {CategotyComponent} from "../../components/ui/CategotyComponent";


export const CategoryScreen = ({navigation}) => {
    const openPostHandler = props => {
        navigation.navigate('CategoryInsideScreen')
    }

    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }

    return (
        <ScrollView onContentSizeChange={onContentSizeChange}>
            <View>
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            </View>
        </ScrollView>
    )
}
CategoryScreen.navigationOptions = {
    headerTitle: 'Категории',
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
