import {LOAD_POSTS,GET_POST} from "../types";
import axios from 'react-native-axios';

export function loadPosts() {
    const request =  axios.get('https://jsonplaceholder.typicode.com/posts');
    return dispatch => {
        request.then(({data})=>{dispatch({type: LOAD_POSTS, payload: data})})
    }
}

export function getPost(id) {
    const request =  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return dispatch => {
        request.then(({data})=>{dispatch({type: GET_POST, payload: data})})
    }
}
