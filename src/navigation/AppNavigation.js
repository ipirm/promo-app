import React,{Fragment} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {MainScreen} from "../screens/MainScreen";
import { TouchableOpacity} from 'react-native';
import {ListScreen} from "../screens/ListScreen";
import {THEME} from "../variables/theme";
import {Ionicons} from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FavoritesScreen} from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
export const AppNavigation = () => {
    const stylesOptions = {
        headerStyle: {
            backgroundColor: THEME.BACKGROUND_COLOR
        },
        headerTintColor: THEME.FONT_COLOR
    }
    const iconName = 'ios-star';
    function HomeStack() {
        return (
                <Tab.Navigator   tabBarOptions={{
                    activeTintColor: '#DB3022',
                }}>
                    <Tab.Screen
                        name="Main"
                        component={MainScreen}
                        options={{
                            tabBarLabel: 'Главная',
                            tabBarIcon: ({ color}) => (
                                <Ionicons name="ios-albums" color={color} size={25} />
                            ),
                        }}
                    />
                    <Tab.Screen name="Favorite" component={FavoritesScreen} options={{
                        tabBarLabel: 'Акция',
                        tabBarIcon: ({ color}) => (
                            <Ionicons name="ios-home" color={color} size={25} />
                        ),
                    }} />
                </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={stylesOptions}
            >
                <Stack.Screen
                    name="Main"
                    component={HomeStack}
                    options={{
                        title: 'Скидки',
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 10, position: 'relative', top: 0}}
                                              activeOpacity={0.7} onPress={() => alert('This is a button!')}>
                                <Ionicons name="ios-search" size={32} color="#222222"/>
                            </TouchableOpacity>
                        ),
                        headerLeft: () => (
                            <TouchableOpacity style={{marginLeft: 10, position: 'relative', top: 1}}
                                              activeOpacity={0.7} onPress={() => alert('This is a button!')}>
                                <Ionicons name="ios-mail" size={32} color="#222222"/>
                            </TouchableOpacity>
                        ),
                    }}

                />
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={({ route }) => ({
                        title: 'Акция',
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 10, position: 'relative',top: 2}}
                                              activeOpacity={0.7} onPress={()=>{}}>
                                <Ionicons name={route.params.like ? iconName : 'ios-star-outline'} size={32} color="#222222"/>
                            </TouchableOpacity>
                        ),
                    })}

                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
