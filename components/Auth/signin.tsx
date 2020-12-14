import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../redux/actions/auth'
import { useRouter } from 'next/router'


export interface SigninComponentProps {
    setStatus?: any
}

const SigninComponent: React.SFC<SigninComponentProps> = ({ setStatus }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state)
    const router = useRouter()
    const [state, setState] = React.useState({
        username: '',
        password: '',
        error: ''
    })
    const onHandleChange = (e) => {
        let { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const { error, ...args } = state
        dispatch(signin(args))
        if(user.error === null) {   
            router.push('/course')
        }
        setState({
            ...state,
            error: user.error
        })
        
        
    }

    return (
        <div className="signin-box">
            <form onSubmit={onHandleSubmit}>
                <p style={{ color: 'red' }}>{state.error}</p>
                <p><span className="ti-email"></span> Email hoặc tên đăng nhập</p>
                <input type="text" name="username" placeholder="email hoặc tên đăng nhập" onChange={onHandleChange} />
                <p><span className="ti-alert"></span> Mật khẩu</p>
                <input type="password" name="password" placeholder="mật khẩu" onChange={onHandleChange} /><br />
                <div className="check">
                    <input className="input-check" type="checkbox" />
                    <p>Nhớ mật khẩu</p>
                </div>
                <button type="submit" onClick={onHandleSubmit}>Đăng nhập</button>
                <div className="text-center"><a href="#">Quên mật khẩu</a></div>
                <div className="signup-text">
                    <p>Bạn chưa có tài khoản</p>
                    <div className="switch-button" onClick={() => setStatus(true)} >Đăng kí</div>
                </div>
            </form>
        </div>
    );
}

export default SigninComponent;