import React from 'react';
import "./LandingPage.css"
import ChallengeCard from "../ChallengeCard/ChallengeCard"
import ImgHandler from "../ImgHandler/ImgHandler"
import courseImgHandler from "../ImgHandler/courseImgHandler"
import CourseCard from "../CourseCard/CourseCard"
import CourseView from "../CourseView/CourseView"
import { useState } from 'react'
import machineLearningData from "../../data/machineLearning.json"
import algorithmData from "../../data/algorithms.json"
const LandingPage = () => {




    let [pageView, setPageView] = useState(0)



    let cardData = [
        {
            challengeName: "Front-End Developement (React)",
            challengeDescription: "This is a breif description of what this challenge will offer here to make sure all of your skills are tested",
            challengeDifficulty: "Intermediate",
            img: ImgHandler[0]
        },
        {
            challengeName: "Back-End Development (Python)",
            challengeDescription: "This is a breif description of what this challenge will offer here to make sure all of your skills are tested",
            challengeDifficulty: "Advanced",
            img: ImgHandler[1]
        },
        {
            challengeName: "Data Structures (Javascript)",
            challengeDescription: "This is a breif description of what this challenge will offer here to make sure all of your skills are tested",
            challengeDifficulty: "Beginner",
            img: ImgHandler[2]
        }
    ]


    let courseData = [
        {
            courseName: "Data Structures & Algorithms",
            image: courseImgHandler[0],
            ID: 0,
            data: algorithmData.algorithmsSecitons,
            sectionCount: algorithmData.algorithmsSecitons.length
        },
        {
            courseName: "Machine Learning & Data Science",
            image: courseImgHandler[1],
            data: machineLearningData.machineLearningSections,
            ID: 1,
            sectionCount: machineLearningData.machineLearningSections.length
        },
        {
            courseName: "Front-End Development & Design",
            image: courseImgHandler[2],
            ID: 2,
            sectionCount: 14
        },
        {
            courseName: "Data Structures & Algorithms",
            image: courseImgHandler[0],
            ID: 3,
            sectionCount: 22
        },
        {
            courseName: "Data Structures & Algorithms",
            image: courseImgHandler[0],
            ID: 4,
            sectionCount: 22
        }
    ]



    function courseViewHandler(data) {
        setPageView(data)


    }

    function renderCourseView() {
        if (pageView !== 0) {
            return (<CourseView data={pageView} courseViewHandler={courseViewHandler} />)
        }
    }


    function lockHomePage() {
        if (pageView !== 0) {
            return ('landing-page-container-locked')
        }

        else {
            return ('landing-page-container')
        }
    }




    return (<div className={lockHomePage()}>
        {renderCourseView()}
        <div className="jumbotron">
            <div className="jumbo-text-container">
                <div className="j-title">COMPUTER SCIENCE</div>
                <div className="j-text">Learn new skills in the world of Computer Science. Such as, Algorithms, Web Development</div>
                <div className="j-buttons-container">
                    <button className="j-button">Learn More</button>
                    <button className="j-button">Visit Course</button>
                </div>
            </div>
        </div>
        <div className="popular-challenges-container">
            <div className="popular-challenges-title">Popular Challenges</div>
            <div className="challenges-container">
                {cardData.map((data) => <ChallengeCard cardData={data} />)}
            </div>
        </div>
        <div className="course-list-wrapper">
            <div className="course-list-title">COURSES</div>
            <div className="course-list-container">
                {courseData.map((data) => <CourseCard data={data} courseViewHandler={courseViewHandler} />)}

            </div>
        </div>
    </div>);
}

export default LandingPage;