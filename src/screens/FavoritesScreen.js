import React, {useState} from 'react'
import {StyleSheet, Button, ScrollView,Text} from 'react-native';
import {DATA} from "../mockData/data";
import {Post} from "../components/ui/Post";

export const FavoritesScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('List', {postId: post.id,like: post.like})
    }
    const [screenHeight, setScreenHeight] = useState(0);
    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }
    return (
        <ScrollView style={styles.mainView} onContentSizeChange={onContentSizeChange}>
            {/*{DATA.map((value, index) => {*/}
            {/*    return <Post key={index} item={value} onOpen={openPostHandler}/>*/}

            {/*})}*/}
            <Text> Akzii </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 10
    }
})
