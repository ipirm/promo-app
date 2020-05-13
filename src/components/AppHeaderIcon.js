import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons } from "@expo/vector-icons"
import {THEME} from "../variables/theme"

export const AppHeaderIcon = props => {
    return <HeaderButton {...props}  iconSize={24} color={THEME.MENU_TITLE_COLOR} IconComponent={Ionicons }/>
}
