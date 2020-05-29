import React from "react";
import { Row, Col } from "react-bootstrap";

export default function DescriptionSection(props) {
  return (
    <Row className={props.directionClass} style={{ marginBottom: 116 }}>
      <Col md={6} className={props.resClassText}>
        <div
          className={
            props.directionClass === "d-flex flex-row"
              ? "d-flex flex-column justify-content-center h-100 align-items-end"
              : "d-flex flex-column justify-content-center h-100 align-items-center w-100"
          }
        >
          <span className={
            props.directionClass === "d-flex flex-row"
              ? "d-flex justify-content-end w-100"
              :"d-flex justify-content-start"
          } style={style.text}>{props.title}</span>
          <span style={style.subtext}>{props.subtitle}</span>
        </div>
      </Col>
      <Col md={6} className={props.resClassIcon}>
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
    width: 282,
  },
  subtext:{
    width: 282,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 17,
    color: '#6B6C7F',
    // direction: 'rtl'

  }
};
