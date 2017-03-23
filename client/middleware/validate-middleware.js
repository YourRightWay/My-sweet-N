import {
    VALIDATE_TIMEOUT,
    SHOW_VALIDATE,
    CLOSE_VALIDATE,
    VALIDATE_COMMENT_FORM
} from '../constants/utils-constants'

const VALIDATE_STATUS = {
    success: 'SUCCESS',
    err: 'ERROR'
}

const validateText = {
    validateName: 'Enter your name',
    validateEmail: 'Enter your email',
    validateComment: 'Enter your comment'
}

export default function validateMiddleware(store) {
    return function (next) {
        return function (action) {

            function activeValidate () {
                store.dispatch(SHOW_VALIDATE)

                setTimeout(function () {
                    store.dispatch(CLOSE_VALIDATE)
                }, VALIDATE_TIMEOUT)
            }

            if(action.type === VALIDATE_COMMENT_FORM) {
                for (var key in action.prop) {

                    if (action.prop[key] === '') {
                        next(action).status = VALIDATE_STATUS.err
                        next(action).text = validateText[key]
                        activeValidate ();
                    
                        break
                    } else {
                        next(action).status = VALIDATE_STATUS.success
                    }
                    
                }
            }

            return next(action)

        }
    }
}
