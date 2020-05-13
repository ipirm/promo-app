import React,{useState} from 'react'
import {ScrollView} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../../components/AppHeaderIcon"
import {CategotyComponent} from "../../components/ui/CategotyComponent"


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
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
            <CategotyComponent onOpen={openPostHandler} />
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

