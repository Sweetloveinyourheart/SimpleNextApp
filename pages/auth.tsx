import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import SigninComponent from '../components/Auth/signin';
import SignupComponent from '../components/Auth/signup';


export interface AuthProps {
    any?
}

const Auth: React.SFC<AuthProps> = () => {

    const [status, setStatus] = useState(false)

    return (
        <div className="signup-slider">
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 col-lg-12 ">
                        <div className="header-auth">
                            <Link href="/"><img src="/img/Logo.png" /></Link>
                            <h2>Đăng kí thành viên của AI team</h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12">
                        { status === true ? <SignupComponent setStatus = {setStatus} /> : <SigninComponent setStatus = {setStatus} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;