import { SIGNIN, SIGNUP } from '../actions/types'
import { AuthAction, User } from '../actions/interface'

interface StateInterface {
    user?: Object,
    users: Object[],
    error: String,
    isAuth: Boolean
}

let initialState: StateInterface = {
    user: null,
    users: [
        {
            username: "yasuo",
            password: "123",
            name: "Death Is Like The Wind",
            email: "abc@xyz.com"
        }
    ],
    error: null,
    isAuth: false
}

const authReducer = (state = initialState, actions: AuthAction) => {
    switch (actions.type) {
        case SIGNIN:
            const exist = state.users.find((v: User): User => {
                if (v.username == actions.user.username) { return v }
            })
            if (!exist) {
                state.error = "Thông tin tài khoản không chính xác"
                return state
            }
            if (actions.user.password !== exist.password) {
                state.error = "Thông tin mật khẩu không chính xác"
                return state
            }
            state.error = null
            state.user = actions.user
            state.isAuth = true
            return state
        case SIGNUP:
            state.users.push(actions.user)
            return state
        default:
            return state
    }
}
export default authReducer