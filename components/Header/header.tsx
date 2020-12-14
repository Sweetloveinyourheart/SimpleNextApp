import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link'

interface HeaderProps {
    status?: String
}

export const Header: FunctionComponent<HeaderProps> = ({ status }) => {

    const infor = useSelector(state=> state)
    
    const checkAuth = () => {
        if ( infor.isAuth === true ) {
            return <li className="login__ok"><span >Ai</span> {infor.user.username} </li>
        }
        return <li className="login"> <Link href="/auth"> Đăng Nhập </Link> <i className="ti_user"></i></li>
    }

    return (
        <header>
            <div className="header">
                <div className={ status + " main-header"}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-1">
                                <div className="logo">
                                    <Link href="/"><img src="img/Logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-8">
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li> <Link href="/"> Trang Chủ</Link> </li>
                                            <li> <Link href="/about"> Giới Thiệu</Link> </li>
                                            <li> <Link href="/course"> Khóa Học</Link> </li>
                                            <li className="has-dropdown"> <Link href="/contact"> Liên Hệ</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/contact">Địa Chỉ</Link></li>
                                                    <li><Link href="/contact">Hòm Thư</Link></li>
                                                    <li><Link href="/contact">Ủng Hộ</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link href="/share"> Chia Sẻ</Link> </li>
                                            {checkAuth()}
                                            
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}