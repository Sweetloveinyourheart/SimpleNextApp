import { SIGNIN, SIGNUP } from './types'
import {AuthAction, User} from './interface'

export const signin = (user: User): AuthAction => {
    return {
        type: SIGNIN,
        user,
        isAuth: true
    }
}
export const signup = (user: User): AuthAction => {
    return {
        type: SIGNUP,
        user,
        isAuth: false
    }
}