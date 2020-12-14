import * as React from 'react';
import CourseInforComponent from './course_infor';
import CourseNavComponent from './course_nav';

export interface CourseComponentProps {
    any?
}

const CourseComponent: React.SFC<CourseComponentProps> = () => {

    const [status, setStatus] = React.useState(0)

    const initialState = [
        {
            name: 'Flappy Bird',
            lang: 'Python',
            like: '1.123 Lượt Thích',
            chapter: '10 Chương',
            image: '/img/course/flappy.png',
            cate: 3
        },
        {
            name: 'Super Snake',
            lang: 'Javascript',
            like: '5.002Lượt Thích',
            chapter: '15 Chương',
            image: '/img/course/snake.jpg',
            cate: 1
        },
        {
            name: 'Cờ Caro',
            lang: 'C#',
            like: '1.123 Lượt Thích',
            chapter: '10 Chương',
            image: '/img/course/caro.jpg',
            cate: 2
        },
        {
            name: 'Cờ Caro',
            lang: 'C#',
            like: '1.123 Lượt Thích',
            chapter: '10 Chương',
            image: '/img/course/caro.jpg',
            cate: 2
        },
        {
            name: 'Super Snake',
            lang: 'Javascript',
            like: '5.002Lượt Thích',
            chapter: '15 Chương',
            image: '/img/course/snake.jpg',
            cate: 1
        },
        {
            name: 'Flappy Bird',
            lang: 'Python',
            like: '1.123 Lượt Thích',
            chapter: '10 Chương',
            image: '/img/course/flappy.png',
            cate: 3
        },
    ]

    const showAllCourse = () => {
        let result = null
        result = initialState.map((v, i, a) => {
            if (status === 0) {
                return <CourseInforComponent
                    name={v.name}
                    lang={v.lang}
                    like={v.like}
                    chapter={v.chapter}
                    image={v.image}
                    key={i}
                />
            }
            if (v.cate === status) {
                return <CourseInforComponent
                    name={v.name}
                    lang={v.lang}
                    like={v.like}
                    chapter={v.chapter}
                    image={v.image}
                    key={i}
                />
            }
        })
        return result
    }

    return (
        <div className="course">
            <div className="course-banner d-flex align-items-center justify-content-center">
                <div className="banner-text">
                    <h1>Khóa Học</h1>
                </div>
            </div>
            <div className="course-main">
                <div className="container">
                    <h1>Danh Sách Khóa Học</h1>
                    <div className="hr__beauty"></div>
                    <CourseNavComponent
                        status={status}
                        setStatus={setStatus}
                    />
                    <div className="course-items">
                        <div className="row">
                            {showAllCourse()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseComponent;