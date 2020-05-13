import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import {AppHeaderIcon} from "../components/AppHeaderIcon"
import {AppView} from "../components/AppView"
import {loadPosts} from "../store/actions/post";
import {AppLoader} from "../components/ui/AppLoader";


export const MainScreen = ({navigation}) => {

    const openPostHandler = post => {
        navigation.navigate('List', {postId: post.id, like: false})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch]);

    const allPosts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)
    if (loading) {
        return <AppLoader />
    }else {
        return (
            <AppView data={allPosts} onOpenPostView={openPostHandler}/>
        )
    }
}

MainScreen.navigationOptions = {
    headerTitle: 'Главная',
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
