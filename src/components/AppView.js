import React, {useState} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {Post} from "./ui/Post"

export const AppView = ({style, data, onOpenPostView}) => {

    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }

    return (
        <ScrollView style={{...styles.mainView, ...style}} onContentSizeChange={onContentSizeChange}>
            {data.map((value, index) => {
                return <Post key={index} item={value} onOpen={onOpenPostView}/>
            })}</ScrollView>
    )
}


const styles = StyleSheet.create({
    mainView: {
        marginTop: 10
    }
})
