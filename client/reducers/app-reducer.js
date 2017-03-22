import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import ArticlesReducer from './articles-reducer'

export default combineReducers({
    ArticlesReducer,
    routing: routerReducer
})
