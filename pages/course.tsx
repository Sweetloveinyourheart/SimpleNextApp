import * as React from 'react';
import CourseComponent from '../components/Course/course';
import Footer from '../components/Footer/footer';
import { Header } from '../components/Header/header';

export interface CourseProps {
    any?
}
 
const Course: React.SFC<CourseProps> = () => {
    return ( 
        <main>
            <Header status={"header-sticky"} />
            <CourseComponent />
            <Footer />
        </main>
     );
}
 
export default Course;