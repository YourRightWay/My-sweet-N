import { INCREASE_COUNTER } from '../constants/utils-constants'

export function increaseCounter() {
    return function (dispatch) {
        dispatch(INCREASE_COUNTER)
    }
}
