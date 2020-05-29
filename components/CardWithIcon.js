import React from "react";

export default function CardWithIcon(props) {
  return (
    <div className="d-flex flex-column">
      <img src={props.icon} alt="icon" />
      <div className="d-flex align-items-center flex-column">
        <span style={style.text}>{props.text}</span>
        <span style={style.subtext}>{props.subtext}</span>
      </div>
    </div>
  );
}

const style = {
  text: {
    fontStßyle: "normal",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    fontSize: "16px",
    textAlign: "center",
    color: "#191C1F",
  },
  subtext: {
    fontStßyle: "normal",
    fontWeight: "normal",
    width: 278,
    lineHeight: 2.5,
    fontSize: "14px",
    textAlign: "center",
    color: "#6B6C7F",
  },
};
