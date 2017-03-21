import {
    GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR,
    GET_ARTICLES_ID_REQUEST, GET_CHANNEL_ID_SUCCESS, GET_CHANNEL_ID_ERROR
} from '../constants/api-constants'

import { ASYNC_DEBUGGER } from '../constants/utils-constants'

import { callApi } from '../utils/call-api'

export function getArticles() {
    return function (dispatch, getState) {

        dispatch(GET_ARTICLES_REQUEST)
        
        let url = '/api/get-articles?limit=1&page=2' 
        
        return callApi(url, {
            method: 'GET'
        }).then((result) => {
            dispatch({ type: ASYNC_DEBUGGER, url: url, response: result })

            // dispatch({
            //     type: GET_CHANNEL_SUCCESS,
            //     data: JSON.stringify(result)
            // })
            
        }).catch((error) => {
            throw new Error(`${url} ${'\n'} ${error}`);
        })

    }
}

export function getArticlesId(id) {
    return function (dispatch, getState) {

        dispatch(GET_ARTICLES_ID_REQUEST)

        let url = `/api/get-articles-id?id=${id}`

        return callApi(url, {
            method: 'GET'
        }).then((result) => {
            dispatch({ type: ASYNC_DEBUGGER, url: url, response: result })

            // dispatch({
            //     type: GET_CHANNEL_ID_SUCCESS,
            //     data: JSON.stringify(result)
            // })

        }).catch((error) => {
            throw new Error(`${url} ${'\n'} ${error}`);
        })

    }
}