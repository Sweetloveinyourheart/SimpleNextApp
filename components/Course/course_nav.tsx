
import * as React from 'react';

export interface CourseNavComponentProps {
    setStatus: any,
    status: any
}

const CourseNavComponent: React.SFC<CourseNavComponentProps> = ({setStatus, status}) => {

    

    const isActive = (index: Number): string => {
        if (status === index) {
            return 'nav-items nav-active'
        }
        return 'nav-items'
    }

    return (
        <div className="course-nav">
            <div className={isActive(0)} onClick={() => setStatus(0)}> Tất Cả </div>
            <div className={isActive(1)} onClick={() => setStatus(1)}> Phổ Biến </div>
            <div className={isActive(2)} onClick={() => setStatus(2)}> Ngôn Ngữ </div>
            <div className={isActive(3)} onClick={() => setStatus(3)}> Độ Khó </div>
        </div>
    );
}

export default CourseNavComponent;