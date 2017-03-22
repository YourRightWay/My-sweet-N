import createUniversalGraphReducer from './universal-transition-graph-reducer'

import {
    S_INITIAL,
    PAGE_LOADING_REQUEST,
    PAGE_LOAD_SUCCESS,
    PAGE_LOAD_ERROR,
    GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR
} from '../constants/api-constants'

const initialState = {
    STATE: 'S_INITIAL',
    isFetching: false,
    articlesList: [],
    currentPage: 1,
    quantityPages: 0
}

let TRANSITION_GRAPH = {
    [S_INITIAL]: {
        [GET_ARTICLES_REQUEST]: (state, action) => ({
            STATE: PAGE_LOADING_REQUEST,
            isFetching: true
        }),
        [GET_ARTICLES_SUCCESS]: (state, action) => ({
            STATE: PAGE_LOAD_SUCCESS,
            isFetching: false,
            articlesList: action.articlesList,
            currentPage: action.currentPage,
            quantityPages: action.quantityPages
        }),
        [GET_ARTICLES_ERROR]: {
            STATE: PAGE_LOAD_ERROR
        }
    }
};

export default createUniversalGraphReducer(initialState, TRANSITION_GRAPH);
