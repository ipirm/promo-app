import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {THEME} from "../../variables/theme"
import {AppText} from "./text/AppText"


export const CompanyComponent = ({item, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
            <View style={styles.wrapper}>
                <View style={styles.text}>
                    <AppText style={styles.textCustom}>Одежда и обувь</AppText>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: THEME.WHITE_COLOR,
        borderBottomColor: THEME.MENU_TITLE_COLOR,
        borderBottomWidth: 0.4,
    },
    text: {
        alignItems: 'center',
        flex: 1,
        height: 47,
        justifyContent: 'center'
    },
    textCustom: {
        fontSize: 16,
        color: THEME.BLACK_COLOR,
    }
})
