import { ROUTING, ROUTING_TIMEOUT } from '../constants/utils-constants'
import { browserHistory } from 'react-router'
import { push } from 'react-router-redux'

/**
 * @param url
 * @returns {Function}
 */
export function routeTo(url) {
    return function (dispatch) {

        setTimeout (function () {
            dispatch(ROUTING);
            browserHistory.push(url);
            dispatch(push(url));
        }, ROUTING_TIMEOUT);
        
    }
}
