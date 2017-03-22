import {
    GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR,
    GET_ARTICLE_ID
} from '../constants/api-constants'

import { ASYNC_DEBUGGER } from '../constants/utils-constants'

import { callApi } from '../utils/call-api'
import { parseId } from '../utils/parse-id'

export function getArticles() {
    return function (dispatch, getState) {

        dispatch(GET_ARTICLES_REQUEST)
        
        let url = `/api/get-articles?limit=${getState().Articles.LIMIT}&page=${getState().Articles.currentPage}` 
        
        return callApi(url, {
            method: 'GET'
        }).then((result) => {
            dispatch({ type: ASYNC_DEBUGGER, url: url, response: result })

            dispatch({
                type: GET_ARTICLES_SUCCESS,
                currentPage: result.page,
                articlesList: Object.assign({}, getState().Articles.articlesList, result.articles),
                quantityPages: result.pageCounter
            })
            
        }).catch((error) => {
            throw new Error(`${url} ${'\n'} ${error}`);
        })

    }
}

export function getArticlesId() {
    return function (dispatch, getState) {
        
        let id = parseId(getState().routing.locationBeforeTransitions.pathname)

        dispatch({
            type: GET_ARTICLE_ID,
            id
        })

    }
}