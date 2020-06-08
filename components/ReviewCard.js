import React from "react";
import quote from "../Assets/Icons/Quote.svg";
import star from "../Assets/Icons/Star.svg";
import displayPic from "../Assets/Icons/DisplayImg.svg";

export const ReviewCard = () => {
  return (
    <div>
        <div className="review-card">
      <div className="d-flex justify-content-between" style={{marginBottom:26,}}>
        <img src={quote} alt="icon" className="review-card-icon"/>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column justify-content-center" style={{marginRight:20, textAlign:"right"}}>
            <span style={style.name}>Full Name</span>
            <span style={style.student}>Student</span>
          </div>
          <img src={displayPic} alt="icon" />
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <span style={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
          nibh aliquam malesuada diam cursus.
        </span>
        <div style={{marginTop:25}}>
          <img src={star} alt="icon" style={{marginRight:25}}/>
          <img src={star} alt="icon" style={{marginRight:25}}/>
          <img src={star} alt="icon" style={{marginRight:25}}/>
          <img src={star} alt="icon" />
        </div>
      </div>
    </div>
    </div>
  );
};

const style = {
  text: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "#6B6C7F",
  },
  name: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom:5,
    color: "#35A7FF",
  },
  student:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    
    color: '#6B6C7F'
  },
};
