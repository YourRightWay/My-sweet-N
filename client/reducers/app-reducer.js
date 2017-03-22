import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Articles from './articles-reducer'

export default combineReducers({
    Articles,
    routing: routerReducer
})
