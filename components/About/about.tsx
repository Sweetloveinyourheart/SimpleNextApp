import * as React from 'react';
import Slider from "react-slick";

export interface AboutComponentProps {
    any?
}

const AboutComponent: React.SFC<AboutComponentProps> = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="about">
            <div className="about-banner d-flex align-items-center justify-content-center">
                <div className="banner-text">
                    <h1>Giới Thiệu</h1>
                </div>
            </div>
            <div className="strategy">
                <h3>Về Tầm Nhìn - Chiến Lược</h3>
                <div className="hr__friday"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10 ">
                            <Slider {...settings}>
                                <div className="strategy-text">
                                    <p> Website AI Team được xây dựng và lấy cảm hứng từ các chòm sao trên bầu trời </p>
                                </div>
                                <div className="strategy-text">
                                    <p>Mỗi chúng ta đều có một tháng sinh tương ứng với một cung hoàng đạo riêng, đi
                                    cùng
                                        với nó là những nét đặc trưng riêng như tính cách, sở thích,...</p>
                                </div>
                                <div className="strategy-text">
                                    <p>Hiểu được điều đó, chúng tôi - AI Team đã tạo ra website này giúp các em
                                    thiếu niên
                                    có thể thực hiện đam mê lập trình game đồng thời giúp các em tìm ra những
                                    game phù
                                        hợp với những nét đặc trưng thông qua các cung hoàng đạo</p>
                                </div>
                                <div className="strategy-text">
                                    <p>Bất kì ai muốn phá vỡ vòng an toàn của chính mình, muốn vươn ra sáng tạo thế
                                    giới,
                                    hay tạo ra một thế giới nào đó thông qua lập trình đều là cách thành viên
                                    của AI
                                        Team</p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-10 ">
                            <div className="service-content">
                                <h3> Đặc điểm của các cung hoàng đạo </h3>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Aries.png" />
                                            <div className="content-text">
                                                <h5>Bạch dương (4/3-19/4) </h5>
                                                <p>Là sự sống, sự khởi đầu, sự sinh sôi phát triển của vũ trụ muôn loài, nổi
                                                    trội về hành động hơn lí trí – bản năng</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Taurus.png" />
                                            <div className="content-text">
                                                <h5>Kim ngưu (20/4-20/5) </h5>
                                                <p>Kim Ngưu đại diện cho một sức mạnh phi thường và sự kiên định, vững vàng và
                                                    còn đại diện cho vẻ đẹp nghệ
                                                    thuật.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Leo.png" />
                                            <div className="content-text">
                                                <h5>Sư tử (23/7-22/8) </h5>
                                                <p>Kiêu ngạo, quyến rũ, khó hiểu, lanh lẹ, gợi cảm, khí chất như sư tử, gợi cảm
                                                    khó cưỡng, cao ngạo như chúa sơn lâm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Virgo.png" />
                                            <div className="content-text">
                                                <h5>Xử nữ (23/8-22/9)</h5>
                                                <p> Bộ phận trong cơ thể có "M", thuộc nguyên tố đất: yên tĩnh, cứng rắn, nghiêm
                                                    túc ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Libra.png" />
                                            <div className="content-text">
                                                <h5>Thiên bình (24/9-23/10) </h5>
                                                <p>Kết nối và cân bằng thế giới ngày và đêm, hình ảnh
                                                    cách điệu cán cân công lí tượng trưng cho khát khao
                                                    công lí
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Scorpio.png" />
                                            <div className="content-text">
                                                <h5>Bọ cạp (24/10- 22/11) </h5>
                                                <p>Chòm sao mang lại sự kích thích, tò mò nhưng tràn ngập sự nguy hiểm, thông
                                                    minh trong quá trình săn mồi
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Sagittarus.png" />
                                            <div className="content-text">
                                                <h5>Nhân mã (23/11-21/12) </h5>
                                                <p> Nhân mã có sự đa dạng về mặt cảm xúc gắn
                                                    liền với sự nhanh nhẹn, khát khao tự do ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Capricorn.png" />
                                            <div className="content-text">
                                                <h5>Ma kết (22/12-19/1)</h5>
                                                <p>Có tính cách cố định, tham vọng về quyền lực, thông minh, đam mê sự nghiệp, công việc
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Gemini.png" />
                                            <div className="content-text">
                                                <h5>Song tử (21/5-21/6) </h5>
                                                <p>Tồn tại sự song song, đồng bộ, biểu dương sự đối lập, mâu thuẫn 2 cá thể
                                                    tương đồng ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Cancer.png" />
                                            <div className="content-text">
                                                <h5>Cự giải (22/6-22/7) </h5>
                                                <p>Ngoại hình cứng cáp, nội tâm yếu mềm, là người nhạy cảm, khao khát yêu thương và tình yêu...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Aquarius.png" />
                                            <div className="content-text">
                                                <h5>Bảo bình (20/1-18/2) </h5>
                                                <p>Bảo Bình thì khéo léo, thích nghi, mềm dẻo, bấp bênh, khó nắm bắt, lưu động.
                                                    Có con mắt tinh tế, dễ dàng nhìn thấu tâm tư, suy nghĩ của người khác
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <img src="/img/zodiac/Pises.png" />
                                            <div className="content-text">
                                                <h5>Song ngư (19/2-20/3) </h5>
                                                <p>Con người có hai mặt tính cách đối lập, con cá bơi ngược thể hiện cho sự
                                                    cảm tính, con bơi xuôi khao khát theo đuổi cái tôi cá nhân nhiều mâu thuẫn
                                                    và khát khao đối lập
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="founder">
                <div className="container">
                    <h3> Người Sáng Lập </h3>
                    <div className="hr__vision"></div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="member">
                                <img src="/img/founder/Chin.jpg" />
                                <div className="member-name"> Phương Trinh </div>
                                <div className="member-job"> Chiến lược - Thương Hiệu - Nội Dung - Đồ Họa </div>
                                <div className="member-contact">
                                    <a className="ti-facebook mr-2" href="https://www.facebook.com/100010370800912"
                                        target="_blank"></a>
                                    <a className="ti-github" href="https://github.com/phuongtrinh547" target="_blank"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="member right">
                                <img src="/img/founder/Me.jpg" />
                                <div className="member-name"> Nguyễn Lâm </div>
                                <div className="member-job"> Founder - Kỹ Thuật - Thiết Kế - Leader </div>
                                <div className="member-contact">
                                    <a className="ti-facebook mr-2" href="https://www.facebook.com/nuests.pipi/"
                                        target="_blank"></a>
                                    <a className="ti-github" href="https://github.com/sweetloveinyourheart"
                                        target="_blank"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;