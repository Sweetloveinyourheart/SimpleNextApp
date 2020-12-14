import * as React from 'react';
import Slider from "react-slick";
import Typed from 'typed.js';

export const HomePage: React.SFC<any> = () => {

    const settings = {
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow: false
              }
            }
          ]
    };

    let options = {
        strings: [" Hoài Bão", " Đam Mê", " Vinh Quang"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        
    };
    
    React.useEffect(() => {
        let typed = new Typed('.typed-words', options);
        typed.start()
    }, [])

    return (
        <div className="slider ">
            <div className="single-slider align-items-center d-flex">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="ai__caption">
                                <h1>AI Team</h1>
                                <h3> Cùng bạn chinh phục </h3>
                                <span className="typed-words"></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="top-course">
                                <h3> <i className="ti-pencil-alt"></i> Khóa Học Nổi Bật</h3>
                                <div className="hr_color"></div>

                                <Slider {...settings}>
                                    <div className="outline col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="course-demo">
                                            <div className="course-img">
                                                <img alt="course" src=" /img/course/flappy.png" />
                                            </div>
                                            <div className="course-info">
                                                <h4> Lập Trình Game Flappy Bird </h4>
                                                <p><i className="ti-github"></i> Tác Giả: Yasuo</p>
                                                <p><i className="ti-world"></i> Ngôn ngữ: Python</p>
                                                <p><i className="ti-timer"></i> Thời Lượng: 120m</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="outline col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="course-demo">
                                            <div className="course-img">
                                                <img alt="course" src=" /img/course/snake.jpg" />
                                            </div>
                                            <div className="course-info">
                                                <h4> Lập Trình Game Super Snake </h4>
                                                <p><i className="ti-github"></i> Tác Giả: Jhin</p>
                                                <p><i className="ti-world"></i> Ngôn ngữ: JavaScript</p>
                                                <p><i className="ti-timer"></i> Thời Lượng: 50m</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="outline col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="course-demo">
                                            <div className="course-img">
                                                <img alt="course" src=" /img/course/caro.jpg" />
                                            </div>
                                            <div className="course-info">
                                                <h4> Lập Trình Game Cờ Caro </h4>
                                                <p><i className="ti-github"></i> Tác Giả: Yone</p>
                                                <p><i className="ti-world"></i> Ngôn ngữ: C#</p>
                                                <p><i className="ti-timer"></i> Thời Lượng: 80m</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}