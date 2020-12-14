import * as React from 'react';
import LessionComponent from '../components/Course/lession';
import { Header } from '../components/Header/header';

export interface LessonProps {

}

const Lesson: React.SFC<LessonProps> = () => {
    return (
        <main>
            <Header status={"header-sticky"}/>
            <LessionComponent />
        </main>

    );
}

export default Lesson;