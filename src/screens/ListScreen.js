import React, {useState, useEffect} from 'react'
import {StyleSheet, View, ScrollView, Image, Text} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../components/AppHeaderIcon"
import {THEME} from "../variables/theme"
import {AppText} from "../components/ui/text/AppText"
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../store/actions/post";
import {AppLoader} from "../components/ui/AppLoader";

export const ListScreen = ({navigation}) => {


    const postId = navigation.getParam('postId');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(postId))
    }, [dispatch]);

    const post = useSelector(state => state.post.activePost)
    const loading = useSelector(state => state.post.loading)

    const [screenHeight, setScreenHeight] = useState(0);

    const onContentSizeChange = (contentWidth, contentHeight) => {
        return setScreenHeight(contentHeight)
    }

    if (loading) {
        return <AppLoader/>
    } else {
        return (
            <ScrollView onContentSizeChange={onContentSizeChange}>
                <View>
                    <Image style={styles.image} source={{uri: 'https://via.placeholder.com/150/92c952'}}/>
                    <View style={styles.overlayText}>
                        <AppText style={styles.mainText}>{post.body} </AppText>
                        <View style={styles.overlayDate}>
                            <AppText style={styles.dateText}>Скидка действует: с 01.02.2020 по 03.04.2020 </AppText>
                        </View>
                        <View style={styles.elevatedElement}><AppText style={styles.elevatedText}> 30% </AppText></View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

ListScreen.navigationOptions = ({navigation}) => {
    const like = navigation.getParam('like')
    const iconName = like ? 'ios-heart' : 'ios-heart-empty';
    return {
        headerTitle: 'Скидка',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item iconName={iconName} title="Search" onPress={() => alert('This is a button!')}/>
            </HeaderButtons>
        ),
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    overlayText: {
        flex: 1,
        padding: 8,
        backgroundColor: THEME.WHITE_COLOR,
        marginTop: 5,
        marginHorizontal: 8,
        borderRadius: 3
    },
    elevatedElement: {
        backgroundColor: THEME.GREEN_COLOR,
        width: 50.87,
        height: 33.74,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 10,
        flex: 1,
    },
    elevatedText: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 23,
        color: THEME.WHITE_COLOR
    },
    mainText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,
        color: THEME.BLACK_COLOR
    },
    dateText: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: 13,
        color: THEME.GREY_FONT_COLOR
    },
    overlayDate: {
        marginTop: 15
    }
})
