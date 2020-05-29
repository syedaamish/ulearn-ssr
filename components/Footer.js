import React from "react";
import { Row } from "react-bootstrap";
import facebook from "../Assets/Icons/facebook.svg";
import twitter from "../Assets/Icons/twitter.svg";
import instagram from "../Assets/Icons/instagram.svg";
import moment from "moment";

export default function Footer() {
  return (
    <Row style={{ backgroundColor: "#191C1F", height: 224 }}>
      <span
        style={{ color: "#6B6C7F" }}
        className="col-md-4 h-100 w-100 d-flex justify-content-center align-items-center"
      >
        ©{moment().format("YYYY")} ULEARN.
      </span>
      <span
        style={{ color: "#fff" }}
        className="col-md-4 h-100 w-100 d-flex justify-content-center align-items-center"
      >
        <img src={facebook} alt="icon" style={{cursor:"pointer",}} />
        <img src={twitter} alt="icon" style={{ marginLeft: 10,cursor:"pointer", }} />
        <img src={instagram} alt="icon" style={{ marginLeft: 15,cursor:"pointer", }} />
      </span>
 
      <div className="col-md-4 h-100 w-100 d-flex justify-content-center align-items-center">
        <span
          style={{
            color: "#fff",
            fontStyle: "normal",
            fontWeight: 600,
            marginRight:20,
            cursor:"pointer",
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Terms of Use
        </span>
        <span
          style={{
            color: "#fff",
            marginRight:20,
            cursor:"pointer",
            fontStyle: "normal",       
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          Contact
        </span>
        <span
          style={{
            color: "#fff",
            fontStyle: "normal",
            cursor:"pointer",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
          }}
        >
          About
        </span>
      </div>
    </Row>
  );
}
