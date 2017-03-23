import {
    GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR,
    SEND_COMMENT_REQUEST, SEND_COMMENT_SUCCESS, SEND_COMMENT_ERROR,
    GET_ARTICLE_ID
} from '../constants/api-constants'

import { ASYNC_DEBUGGER, VALIDATE_COMMENT_FORM } from '../constants/utils-constants'

import { callApi } from '../utils/call-api'
import { parseId } from '../utils/parse-id'

/**
 * Get articles
 * @returns {Function}
 */
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

/**
 * Get article with id
 * @returns {Function}
 */
export function getArticlesId() {
    return function (dispatch, getState) {

        let id = parseId(getState().routing.locationBeforeTransitions.pathname)

        dispatch({
            type: GET_ARTICLE_ID,
            id
        })

    }
}


/**
 * Post request for send comment form
 * @param name
 * @param email
 * @param text
 * @returns {Function}
 */
export function sendCommentForm(name, email, text) {
    return function (dispatch, getState) {

        dispatch({
            type: VALIDATE_COMMENT_FORM,
            prop: {
                validateName: name,
                validateEmail: email,
                validateComment: text
            }
        })

        if (getState().Validate.validateStatus === 'SUCCESS') {

            dispatch(SEND_COMMENT_REQUEST)
            
            return callApi('http://api.blog.dev.singree.com/comment/', {
                method: 'POST',
                body: JSON.stringify({
                    "articleId": getState().Articles.id,
                    "text": text,
                    "author": getState().Articles.id,
                    "authorName": name
                })
            }).then((result) => {
                dispatch({ type: ASYNC_DEBUGGER, url: 'http://api.blog.dev.singree.com/comment/', response: result })

                dispatch({
                    type: SEND_COMMENT_SUCCESS,
                    result: Object.assign({replies: []}, result)
                })

            }).catch((error) => {
                throw new Error(`${'http://api.blog.dev.singree.com/comment/'} ${'\n'} ${error}`);
            })
            
        }

    }
}