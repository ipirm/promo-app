import {GET_POST, LOAD_POSTS, SHOW_LOADER} from "../types";

const initialState = {
    allPosts: [],
    loading: true,
    error: null,
    bookedPosts: [],
    activePost: {}
}


export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case LOAD_POSTS:
            return {
                ...state,
                allPosts: action.payload,
                loading: false,
                // bookedPosts: action.payload.filter(post => post.like)
            };
        case GET_POST:
            return {
                ...state,
                activePost: action.payload,
                loading: false,
            }
        default:
            return state
    }
}
