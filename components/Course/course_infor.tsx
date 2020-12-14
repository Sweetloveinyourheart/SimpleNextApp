import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'

export interface CourseInforComponentProps {
    name: String,
    lang: String,
    like: String,
    image: string,
    chapter: String
}

const CourseInforComponent: React.SFC<CourseInforComponentProps> = ({ name, lang, like, image, chapter }) => {

    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="course-item">
                <div className="course-img">
                    <img src={image} />
                </div>

                <div className="course-content">
                    <h4> {name}</h4>
                    <Link href="/lesson"> Học Ngay ! </Link>
                </div>
                <div className="course-achie">
                    <p><span className="ti-world"></span> {lang}</p>
                    <p><span className="ti-eye"></span> {like}</p>
                    <p><span className="ti-book"></span> {chapter}</p>
                </div>
            </div>
        </div>
    );
}

export default CourseInforComponent;