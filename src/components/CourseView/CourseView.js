import React from 'react';
import "./CourseView.css"
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import CourseSection from './CourseSection/CourseSection'
const CourseView = (props) => {

    let [courseState, setCourseState] = useState(0)

    let [theCourseData, setTheCourseData] = useState(props.data.data);
    let [courseText, setCourseText] = useState('')



    let viewStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })
    let barView = useSpring({ from: { marginLeft: -300 }, to: { marginLeft: 0 } })
    let textStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 500 }, delay: 200 })


    function changeView(data) {

        setCourseState(data)
    }

    return (<div className="course-view-container">
        <animated.div style={barView} className="course-nav-bar">
            <div className="course-nav-bar-header">
                <animated.div style={viewStyle} className="header-text">{props.data.courseName}</animated.div>
                <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                </div>
            </div>
            <div className="course-bar-sections-container">

                {theCourseData.map((section) =>
                    <CourseSection header={section.header} id={section.position} changeView={changeView} end={theCourseData.length} />
                )}

            </div>
        </animated.div>
        <div className="course-material-container">
            <animated.div style={textStyle} className="material-texts-container">
                <div className="section-container">
                    <div className="section-title">{theCourseData[courseState].header}</div>
                    <div className="course-text">{theCourseData[courseState].headerText}</div>
                    <div className="section-texts">{theCourseData[courseState].subSections.map((text) => <div className="texts-wrapper">
                        <div className="section-subtitle">{text.title}</div>
                        <div>{text.texts.map((a) => <div className="course-text">{a}</div>)}</div>
                    </div>)}
                    </div>
                </div>



            </animated.div>




        </div>
        <div className="close-view-button" onClick={() => { props.courseViewHandler(0) }}><i className="far fa-times-circle"></i></div>


    </div>);
}

export default CourseView;