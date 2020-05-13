import {createStore, combineReducers, applyMiddleware} from 'redux'
import {postReducer} from './reducers/post'
import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    post: postReducer
})

export default createStore(rootReducer, applyMiddleware(ReduxThunk))
