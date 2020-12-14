import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../redux/actions/auth'

export interface SignupComponentProps {
    setStatus? : any
}

const SignupComponent: React.SFC<SignupComponentProps> = ({setStatus}) => {

    const dispatch = useDispatch()
    const [state, setState] = React.useState({
        username: '',
        password: '',
        password0: '',
        email: '',
        name: '',
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
        if (state.password !== state.password0) {
            return setState({
                ...state,
                error: 'Mật Khẩu Không Khớp !'
            })
        }
        const { password0, ...args } = state
        dispatch(signup(args))
        alert('Đăng Kí Thành Công !')
    }

    return (
        <div className="signup-box">
            <form onSubmit={onHandleSubmit}>
                <p style={{color: 'red'}}>{state.error}</p>
                <p>Tên đăng nhập</p>
                <input type="text" name="username" placeholder="tên đăng nhập" onChange={onHandleChange}/>
                <p>Email</p>
                <input type="email" name="email" placeholder="email" onChange={onHandleChange}/>
                <p>Mật khẩu</p>
                <input type="password" name="password" placeholder="mật khẩu" onChange={onHandleChange} /><br />
                <p>Nhắc lại mật khẩu</p>
                <input type="password" name="password0" placeholder="nhắc lại mật khẩu" onChange={onHandleChange}/><br />
                <p>Tên Của Bạn</p>
                <input type="text" name="name" placeholder="Tên của bạn" onChange={onHandleChange} />
                <button type="submit" onClick={onHandleSubmit}>Đăng kí</button>
                <div className="signin-text">
                    <p>Bạn đã có tài khoản</p>
                    <div className="switch-button" onClick={() => setStatus(false)}>Đăng nhập</div>
                </div>
            </form>
        </div>
    );
}

export default SignupComponent;