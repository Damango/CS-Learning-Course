import React from 'react';
import "./CourseCard.css"

const CourseCard = (props) => {


    let theCardImage = { backgroundImage: "url(" + props.data.image + ")" }



    function courseView() {
        props.courseViewHandler(props.data)

    }


    return (
        <div className="course-card-container" onClick={courseView}>
            <div className="card-text">
                <div className="card-title">{props.data.courseName}</div>
                <div className="card-sections-amount">{props.data.sectionCount} Sections</div>
            </div>
            <div className="card-image" style={theCardImage}></div>
        </div>
    );
}

export default CourseCard;