import {GET_POST, LOAD_POSTS} from "../types";

const initialState = {
    allPosts: [],
    loading: true,
    bookedPosts: [],
    activePost: {}
}


export const postReducer = (state = initialState, action) => {
    switch (action.type) {
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
            }
        default:
            return state
    }
}
