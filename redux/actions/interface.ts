export interface AuthAction {
    type: String,
    user?: User,
    isAuth: Boolean
}
export interface User {
    username: String,
    password: String,
    email? :String,
    name?: String
}