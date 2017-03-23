import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Articles from './articles-reducer'
import Validate from './validate-reducer'

export default combineReducers({
    Articles,
    Validate,
    routing: routerReducer
})
