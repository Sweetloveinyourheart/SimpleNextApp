import * as React from 'react';

export interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-nav">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 footer-item">
                            <a href="index.html"><img src="/img/Logo.png" alt="" /></a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 footer-item">
                            <h3 className="nav-color">Thông tin AI team</h3>
                            <a href="./about.html">Về AI team</a><br />
                            <a href="./contact.html">Dịch vụ</a><br />
                            <a href="./contact.html">Liên hệ</a><br />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 footer-item">
                            <h3 className="nav-color">Cộng đồng</h3>
                            <a href="./contact.html">Hỏi đáp</a><br />
                            <a href="./share.html">Tài liệu</a><br />
                            <a href="./about.html">Chiến dịch</a><br />
                            <a href="./contact.html">Tài trợ</a><br />
                            <a href="./contact.html">Người ủng hộ</a>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-3 footer-item">
                            <h3 className="nav-color">Kết nối với AI team</h3>
                            <a>567 Lê Duẩn - Ea Tam - TP.BMT </a> <br />
                            <a>Kết nối với AI team qua mạng xã hội</a>
                            <div className="footer-contact">
                                <div className="ti-facebook"></div>
                                <div className="ti-github"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;