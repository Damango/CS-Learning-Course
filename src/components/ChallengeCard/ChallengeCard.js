import React from 'react';
import "./ChallengeCard.css"

const ChallengeCard = (props) => {


    let imgBackground = { backgroundImage: "url(" + props.cardData.img + ")" }




    return (
        <div className="challenge">
            <div className="c-image" style={imgBackground}></div>
            <div className="c-info-container">
                <div className="c-difficulty">{props.cardData.challengeDifficulty}</div>
                <div className="c-title">{props.cardData.challengeName}</div>
                <div className="c-description">This is a breif description of what this challenge will offer here to make sure all of your skills are tested</div>
                <button className="c-button">View Challenge</button>
            </div>
        </div>
    );
}

export default ChallengeCard;