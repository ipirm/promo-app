import React, {useEffect} from 'react'
import {AppView} from "../../components/AppView"
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../../store/actions/post";

export const CategoryInsideScreen = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch]);

    const allPosts = useSelector(state => state.post.allPosts)
    const openPostHandler = post => {
        navigation.navigate('List', {postId: post.id, like: false})
    }
    return (
        <AppView data={allPosts} onOpenPostView={openPostHandler}/>
    )
}


CategoryInsideScreen.navigationOptions = {
    headerTitle: 'Название'
}


