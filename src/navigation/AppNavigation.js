import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {MainScreen} from "../screens/MainScreen"
import {ListScreen} from "../screens/ListScreen"
import {FavoritesScreen} from "../screens/FavoritesScreen"
import {Ionicons} from "@expo/vector-icons"
import {CategoryScreen} from "../screens/category/CategoryScreen"
import {CompanyScreen} from "../screens/company/CompanyScreen"
import {CategoryInsideScreen} from "../screens/category/CategoryInsideScreen"
import {CompanyInsideScreen} from "../screens/company/CompanyInsideScreen"
import {THEME} from "../variables/theme"


const PostNavigation = createStackNavigator({

    Main: MainScreen,
    List: {
        screen: ListScreen
    }
}, {
    initialRouteName: 'Main'
});
const FavoriteNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
})

const CategoryNavigator = createStackNavigator({
    Category: CategoryScreen,
    CategoryInsideScreen: {
        screen: CategoryInsideScreen
    },
    List: {
        screen: ListScreen
    }
})
const CompanyNavigator = createStackNavigator({
    Company: CompanyScreen,
    CompanyInsideScreen: {
        screen: CompanyInsideScreen
    },
    List: {
        screen: ListScreen
    }
})
const BottomTabNavigation = createBottomTabNavigator({
    Main: {
        screen: PostNavigation,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="ios-home" size={25} color={info.tintColor}/>)
        }
    },
    Category: {
        screen: CategoryNavigator,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="md-cart" size={25} color={info.tintColor}/>)
        }
    },
    Company: {
        screen: CompanyNavigator,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="ios-briefcase" size={25} color={info.tintColor}/>)
        }
    },
    Favorites: {
        label: 'Избранное',
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarIcon: info => (<Ionicons name="ios-heart" size={25} color={info.tintColor}/>)
        }
    },
}, {
    tabBarOptions: {
        inactiveTintColor: THEME.MENU_TITLE_COLOR,
        activeTintColor: THEME.MENU_ACTIVE_TITLE_COLOR
    }
})
export const AppNavigation = createAppContainer(BottomTabNavigation)
