import * as React from 'react';

export interface ShareComponentProps {
    
}
 
const ShareComponent: React.SFC<ShareComponentProps> = () => {
    return ( 
        <section className="share_area section-padding">
            <div className="share-banner d-flex justify-content-center align-items-center">
                <h1> Chia Sẻ </h1>
            </div>
            <div className="pt-5 container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="share_left_sidebar">
                            <article className="share_item">
                                <div className="share_item_img">
                                    <img className="card-img rounded-0" src="/img/blog/single_blog_1.png" alt="" />
                                    <a href="#" className="share_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className="share_details">
                                    <a className="d-inline-block" href="blog_details.html">
                                        <h2>Đừng chỉ mải code và code, hãy dành thời gian cho bản thân</h2>
                                    </a>
                                    <p>Cần cù chịu khó trong công việc sẽ giúp bạn thành công, nhưng đừng quá chú trọng
                                        vào việc code "trường kì" - code "liên tục", hãy dành thời gian cho bản thân
                                        nhiều hơn ...</p>
                                    <ul className="share-info-link">
                                        <li><a href="#"><i className="ti-github"></i> Lâm LD</a></li>
                                        <li><a href="#"><i className="ti-comment"></i> 03 Bình luận</a></li>
                                    </ul>
                                </div>
                            </article>

                            <article className="share_item">
                                <div className="share_item_img">
                                    <img className="card-img rounded-0" src="/img/blog/single_blog_2.png" alt="" />
                                    <a href="#" className="share_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className="share_details">
                                    <a className="d-inline-block" href="blog_details.html">
                                        <h2> Game đua xe thực tế ảo trên Mobile </h2>
                                    </a>
                                    <p> Ngày trước khi chơi game thực tế ảo, bạn phải cần những chiếc máy chơi game
                                        khủng, hay những cỗ máy PC cấu hình cao, nhưng bây giờ chỉ cần một chiếc điện
                                        thoại ... </p>
                                    <ul className="share-info-link">
                                        <li><a href="#"><i className="ti-github"></i> Phương Trinh </a></li>
                                        <li><a href="#"><i className="ti-comment"></i> 100 Comments</a></li>
                                    </ul>
                                </div>
                            </article>
                            <article className="share_item">
                                <div className="share_item_img">
                                    <img className="card-img rounded-0" src="/img/blog/single_blog_4.png" alt="" />
                                    <a href="#" className="share_item_date">
                                        <h3>15</h3>
                                        <p>Jan</p>
                                    </a>
                                </div>

                                <div className="share_details">
                                    <a className="d-inline-block" href="blog_details.html">
                                        <h2>Tôi đã trở thành lập trình viên Game cho NCsoft như thế nào ?</h2>
                                    </a>
                                    <p>Quá trình học tập, chuẩn bị hồ sơ, phỏng vấn tại NCsoft thật sự mang lại cho tôi
                                        một trải nghiệm khó quên ...</p>
                                    <ul className="share-info-link">
                                        <li><a href="#"><i className="ti-github"></i> Lâm LD</a></li>
                                        <li><a href="#"><i className="ti-comment"></i> 50 Comments</a></li>
                                    </ul>
                                </div>
                            </article>

                            <nav className="share-pagination justify-content-center d-flex">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a href="#" className="page-link" aria-label="Previous">
                                            <i className="ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a href="#" className="page-link">1</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a href="#" className="page-link" aria-label="Next">
                                            <i className="ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="share_right_sidebar">
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder='Search Keyword' />
                                            <div className="input-group-append">
                                                <button className="btns" type="button"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Search</button>
                                </form>
                            </aside>

                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title">Danh Mục</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a href="#">
                                            <p>Kinh Nghiệm Lập Trình</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <p>Phương Pháp Học Tập</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <p>Công Nghệ</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <p>Sản Phẩm Thực Tế</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget tag_cloud_widget">
                                <h4 className="widget_title">Thẻ Tag</h4>
                                <ul className="list">
                                    <li>
                                        <a href="#">project</a>
                                    </li>
                                    <li>
                                        <a href="#">technology</a>
                                    </li>
                                    <li>
                                        <a href="#">life style</a>
                                    </li>
                                    <li>
                                        <a href="#">design</a>
                                    </li>
                                    <li>
                                        <a href="#">illustration</a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget newsletter_widget">
                                <h4 className="widget_title">Newsletter</h4>

                                <form action="#">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder='Enter email'
                                            required />
                                    </div>
                                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Phản Hồi</button>
                                </form>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ShareComponent;