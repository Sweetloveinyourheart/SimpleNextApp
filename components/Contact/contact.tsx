import * as React from 'react';

export interface ContactComponentProps {
    
}
 
const ContactComponent: React.SFC<ContactComponentProps> = () => {
    return ( 
        <div className="contact">
            <div className="contact-banner d-flex align-items-center justify-content-center">
                <div className="contact-title">
                    <h1>Liên hệ</h1>
                </div>
            </div>
            <div className="contact-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="box">
                                <form>
                                    <h3><span className="ti-themify-favicon-alt"></span>  GỬI THÔNG TIN LIÊN HỆ VÀ GÓP Ý</h3>
                                    <h4>Góp ý hoặc gửi liên hệ cho AI team nếu bạn có nhu cầu về dịch vụ hay những thắc mắc khác</h4><br />
                                    <p>Họ tên</p>
                                    <input type="text" name="name" placeholder="Tên của bạn" /> <br />
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="Email" />
                                    <p>Số điện thoại</p>
                                    <input type="tel" name="phone_number" placeholder="Số điện thoại" />
                                    <p>Tiêu đề</p>
                                    <input type="text" name="tittle" placeholder="Tiêu đề" />
                                    <p>Nội dung</p>
                                    <textarea  id="contain" placeholder="Nội dung" cols={4} rows={5} /><br />
                                    <button type="submit"><span className="ti-location-arrow"></span>  Gửi</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="other-contact">
                                <h3><span className="ti-alert"></span>  THÔNG TIN LIÊN HỆ KHÁC</h3>
                                <div className="main-contact">
                                    <h4>Mọi thông tin đóng góp ý kiến hoặc hỗ trợ, người dùng có thể liên hệ trực tiếp qua các kênh sau:</h4>
                                    <p><span className="ti-themify-favicon"></span> Điện thoại</p>
                                    <a href="#">1111111111(Trinh)</a><br />
                                    <a href="#">2222222222(Lâm)</a>
                                    <p><span className="ti-google"></span> Email</p>
                                    <a href="#">123@gmail.com</a>
                                    <p><span className="ti-facebook"></span> AI team page</p>
                                    <a href="#">https://www.fb.com/AIteam</a>
                                    <p><span className="ti-facebook"></span> AI team group</p>
                                    <a href="#">https://www.fb.com/groups/AIteam</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
     );
}
 
export default ContactComponent;