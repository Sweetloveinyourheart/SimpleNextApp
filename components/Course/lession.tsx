import * as React from 'react';
import LessonCommentComponent from './lesson_comment';
import { useSelector } from 'react-redux'

export interface LessionComponentProps {
    any?
}

const LessionComponent: React.SFC<LessionComponentProps> = () => {
    const infor = useSelector(state=> state)

    let initialState = [
        {
            name: 'Trinh Xinh Gái',
            content: 'Bài viết dễ hiểu quá ạ, mong Ai team sẽ tích tực phát triển website để nhiều người có thể tiếp cận với lập trình dễ dàng hơn ạ',
            image: '/img/founder/Chin.jpg'
        },
        {
            name: 'Lâm Đẹp Chai',
            content: 'Bài viết dễ hiểu quá ạ, mong Ai team sẽ tích tực phát triển website để nhiều người có thể tiếp cận với lập trình dễ dàng hơn ạ',
            image: '/img/founder/Me.jpg'
        }
    ]

    const [state, setState] = React.useState(initialState)
    const [cmt, setCmt] = React.useState('')
    
    const showAllCmt = () => {
        let result = null
        result = state.map((v, i, a) => {
            return <LessonCommentComponent
                        name={v.name}
                        content={v.content}
                        image={v.image}
                        key={i}
                    />
        })
        return result
    }
    const onHandleChange = (e) => {
        let { value } = e.target
        setCmt(value)
        
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(infor.isAuth !== true) {
            return alert('Bạn hãy đăng nhập trước !')
        }
        const newCmt = {
            name: infor.user.username,
            content: cmt,
            image: '/img/founder/Customer.jpg'
        }
        setState(state => 
            [...state, newCmt]
        )
    }


    return (
        <div className="lesson">
            <div className="lesson-banner d-flex align-items-center justify-content-center">
                <div className="banner-text">
                    <h1>Lập Trình Game Flappy Bird</h1>
                </div>
            </div>
            <div className="lesson-content">
                <div className="container">
                    <div className="focus-content">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-8">
                                <iframe src="https://www.youtube.com/embed/MMxFDaIOHsE"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-4">
                                <div className="lesson-list">
                                    <h3> <span className="ti-book"></span> Danh Sách Bài Học </h3>
                                    <div className="list-items">
                                        <a href="#" className="active">01. Tạo đối tượng Bird </a>
                                        <a href="#">02. Tạo hiệu ứng chuyển động cho Bird </a>
                                        <a href="#">03. Cải thiện đồ họa </a>
                                        <a href="#">04. Thiết lập sự di chuyển cho Bird </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-content">
                        <h2>Tạo Đối Tượng Bird</h2>
                        <div className="hr__wiretap"></div>
                        <div className="content-item">
                            <h3> Yêu Cầu </h3>
                            <p> Để học tốt bài này các bạn cần có kiến thức về: </p>
                            <ul>
                                <li> Biến và các kiểu dữ liệu của Python </li>
                                <li> Một số thư viện của Python: neat, time, os</li>
                                <li> Các phương thức (method) tương ứng của thư viện trên </li>
                                <li> Kiến thức về OOP (Lập trình hướng đối tượng) </li>
                            </ul>
                        </div>
                        <div className="content-item">
                            <h3> Nội Dung</h3>
                            <p> Khai báo thư viện sử dụng:</p>
                            <div className="code">
                                <code>
                                    <div><span className="const-keyword">import</span> nest</div>
                                    <div><span className="const-keyword">import</span> time</div>
                                    <div><span className="const-keyword">import</span> os</div>
                                    <div><span className="const-keyword">import</span> random</div>
                                </code>
                            </div>
                            <p> Sử dụng hình ảnh làm đồ họa:</p>
                            <div className="code">
                                <code>
                                    <div><span className="const-keyword2">MIN_WIDTH</span> = 600</div>
                                    <div><span className="const-keyword2">MIN_HEIGHT</span> = 800</div>
                                    <br />
                                    <div><span className="const-keyword2">pipe_img</span> = pygame.transform.<span className="const-keyword1">scale2x</span>(pygame.image.<span className="const-keyword1">load</span>(os.path.<span className="const-keyword1">join</span>("imgs","pipe.png"))</div>
                                    <div><span className="const-keyword2">bg_img </span>= pygame.transform.<span className="const-keyword1">scale2x</span>(pygame.image.<span className="const-keyword1">load</span>(os.path.<span className="const-keyword1">join</span>("imgs","bg.png"))</div>
                                    <div><span className="const-keyword2">bird_images </span>= pygame.transform.<span className="const-keyword1">scale2x</span>(pygame.image.<span className="const-keyword1">load</span>(os.path.<span className="const-keyword1">join</span>("imgs","bird1.png"))</div>
                                    <div><span className="const-keyword2">base_img </span>= pygame.transform.<span className="const-keyword1">scale2x</span>(pygame.image.<span className="const-keyword1">load</span>(os.path.<span className="const-keyword1">join</span>("imgs","base.png"))</div>
                                </code>
                            </div>
                            <p> Tạo className (Lớp) cho đối tượng Bird: </p>
                            <div className="code">
                                <code>
                                    <div><span className="const-keyword1">className</span> Bird:</div>
                                    <div className="function">
                                        <div><span className="const-keyword2">MAX_ROTATION</span> = 25</div>
                                        <div><span className="const-keyword2">IMGS </span> = bird_images</div>
                                        <div><span className="const-keyword2">ROT_VEL</span> = 20</div>
                                        <div><span className="const-keyword2">ANIMATION_TIME</span> = 5</div>
                                        <br />
                                        <div><span className="const-keyword1">def __init__</span>(self, x, y):</div>
                                        <div className="function">
                                            <div><span className="const-keyword2">self</span>.x = x</div>
                                            <div> <span className="const-keyword2">self</span>.y = y</div>
                                            <div><span className="const-keyword2">self</span>.tilt = 0  # degrees to tilt</div>
                                            <div><span className="const-keyword2">self</span>.tick_count = 0</div>
                                            <div><span className="const-keyword2">self</span>.vel = 0</div>
                                            <div> <span className="const-keyword2">self</span>.height = <span className="const-keyword2">self</span>.y</div>
                                            <div><span className="const-keyword2">self</span>.img_count = 0</div>
                                            <div><span className="const-keyword2">self</span>.img = <span className="const-keyword2">self</span>.IMGS[0]</div>
                                        </div>
                                        <div><span className="const-keyword1">def jump</span>(self):</div>
                                        <div className="function">
                                            <div><span className="const-keyword2">self</span>.vel = -10.5</div>
                                            <div><span className="const-keyword2">self</span>.tick_count = 0</div>
                                            <div><span className="const-keyword2">self</span>.height = <span className="const-keyword2">self</span>.y</div>
                                        </div>
                                        <div><span className="const-keyword1">def move</span>(self):</div>
                                    </div>
                                    <br />
                                    <div><span className="const-keyword1">While</span> true:</div>
                                    <div className="function">bird.<span className="const-keyword1">move()</span></div>
                                </code>
                            </div>
                        </div>
                        <div className="content-item">
                            <h3> Tạm Kết </h3>
                            <p> Qua bài học, Ai Team đã giúp bạn học cách khởi tạo đối tượng Bird trong series Lập trình
                                game Flappy Bird</p>
                            <p> Ở bài sau, Ai Team sẽ hướng dẫn các bạn: <a href="#">Tạo hiệu ứng chuyển động cho
                                    Bird</a> </p>
                        </div>
                        <div className="content-item">
                            <h3> Thảo Luận </h3>
                            <p> Những ý kiến và thắc mắc của các bạn sẽ được mọi người giải đáp </p>
                            <div className="comments">
                                {showAllCmt()}
                            </div>
                            <h4 className="text-center mt-4"> Viết bình luận của bạn  </h4>
                            <form className="d-flex justify-content-center" onSubmit={onHandleSubmit}>
                                <input type="text" onChange={onHandleChange}/>
                                <button type="submit"> Góp ý </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LessionComponent;