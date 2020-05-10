import React, {useState} from 'react'
import {StyleSheet, Button, ScrollView} from 'react-native';
import {DATA} from "../mockData/data";
import {Post} from "../components/ui/Post";

export const MainScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('List', {postId: post.id,like: post.like})
    }
    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }
    return (
        <ScrollView style={styles.mainView} onContentSizeChange={onContentSizeChange}>
            {DATA.map((value, index) => {
                return <Post key={index} item={value} onOpen={openPostHandler}/>
            })}</ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 10
    }
})
