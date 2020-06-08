import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DescriptionSection(props) {
  return (
    <Row className={props.directionClass} style={{ marginBottom: 116 }}>
      <Col md={6}>
        <div className="d-flex flex-column justify-content-center h-100 align-items-center w-100">
          <span style={style.text}>{props.title}</span>
          <span style={style.subtext}>{props.subtitle}</span>
        </div>
      </Col>
      <Col md={6} className="d-flex justify-content-center">
        <img src={props.DescIcon} alt="icon" style={props.iconStyle} />
      </Col>
    </Row>
  );
}

const style = {
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    color: "#191C1F",
    textAlign:"right",
    lineHeight:2.5,
    width: 282,
  },
  subtext:{
    width: 282,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    textAlign:"right",
    lineHeight:2.5,
    color: '#6B6C7F',
    // direction: 'rtl'

  }
};
