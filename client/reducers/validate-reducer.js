import {
    SHOW_VALIDATE, CLOSE_VALIDATE,
    VALIDATE_COMMENT_FORM
} from '../constants/utils-constants'

const initialState = {
    validateText: '',
    validateNotify: false,
    validateStatus: 'WAITING'
}

export default function validator(state = initialState, action) {
    switch (action.type) {

        case VALIDATE_COMMENT_FORM:
            return Object.assign( {}, state, {
                validateStatus: action.status,
                validateText: action.text
            });

        case SHOW_VALIDATE:
            return Object.assign( {}, state, {
                validateNotify: true
            });

        case CLOSE_VALIDATE:
            return Object.assign( {}, state, {
                validateNotify: false
            });

        default:
            return state;
    }

}
