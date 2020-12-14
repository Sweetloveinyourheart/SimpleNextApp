import * as React from 'react';


export interface LessonCommentComponentProps {
    name: String,
    content: String,
    image: string
}

const LessonCommentComponent: React.SFC<LessonCommentComponentProps> = ({name, content, image}) => {
    


    return (
        <div className="comment">
            <img src={image} />
            <div className="comment-ct">
                <h5> {name} </h5>
                <p>{content}</p>
                <hr />
                <div className="reaction">
                    <div className="like"><span className="ti-heart"></span> Thích</div>
                    <div className="cmt"><span className="ti-comment"></span> Trả Lời </div>
                </div>
            </div>
        </div>
    );
}

export default LessonCommentComponent;