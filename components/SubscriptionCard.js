import React from "react";
import checkmark from "../Assets/Icons/Checkmark.svg";
import { Button } from "react-bootstrap";

export default function SubscriptionCard(props) {
  return (
    <div className="subscription-card" style={{ marginBottom: 16 }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center subscription-card-header"
        style={{ height: 140 }}
      >
        {props.tag ? (
          <div className="tag">
            <span
              className="d-flex justify-content-center align-items-center"
              style={style.tagText}
            >
              نوصي
            </span>
          </div>
        ) : null}
        <span style={style.title}>{props.title}</span>
        <span className={"subscription-card-desc"}>{props.desc}</span>
      </div>
      <div className="d-flex flex-column" style={{ padding: 32 }}>
        {props.listData.map((listText, key) => (
          <div key={key} className="d-flex flex-row justify-content-end">
            {" "}
            <span style={{ ...style.listText, width: "65%" }}>{listText}</span>
            <img src={checkmark} alt="icon" style={{ marginLeft: 26 }} />
          </div>
        ))}
        <Button
          style={{
            ...style.btn,
            background: props.btn2 ? "#35A7FF" : "#FD3E60",
          }}
        >
          {props.btnText}
        </Button>
      </div>
    </div>
  );
}

const style = {
  btn: {
    height: 56,
    borderRadius: 8,
    border: "none",
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    marginBottom: 4,
    color: "#191C1F",
  },
  tagText: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    color: "#FFFFFF",
  },
  listText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 8,
    color: "#6B6C7F",
    lineHeight: "28px",
  },
};
