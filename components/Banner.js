import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import banner from "../Assets/Images/head_placeholder.png";
import review from "../Assets/Icons/review.svg";

export const Banner = () => {
  return (
    <Row>
      <Col md={6}>
        <img src={banner} alt="img" />
      </Col>
      <Col md={6}>
        <div style={{ textAlign: "right" ,paddingTop:65}}>
          <div className="d-flex flex-column">
            <span style={style.text}> ﺔﻐﻠﻟا ﻢﻠﻌﺗ</span>
            <span style={{ ...style.text, color: "#010101" }}>
              ﺖﻴﺒﻟا ﻲﻓ ﺖﻧاو
            </span>
            <span style={style.subtext}>
              نﺮﻴﻟﻮﻳ ﻲﻓ ﻚﺑ ًﺎﻠﻫا ﻚﺘﻴﺑ ﻦﻣ ﻚﺒﺳﺎﻨﺗ ﻲﺘﻟا تﺎﻗوﺄﻟا ﻲﻓو رﺎﻌﺳﺄﻟا ﻞﻗﺄﺑ
              ﺎﻫﺪﻳﺮﺗ ﻲﺘﻟا ﺔﻐﻠﻟا ﻢﻠﻌﺗ نﺂﻟا ﻚﻨﻜﻤﻳ ﻪﻋﺎﻤﺳ + ﺖﻧﺮﺘﻧا + دﺎﺒﻳا/بﻮﺘﺑﺎﻟ
              ﻪﺟﺎﺘﺤﺗ ﺎﻣ ﻞﻛ
            </span>
            <Button style={style.btn}>ﻢﻠﻌﺘﻟا أﺪﺑا</Button>
          </div>
          <div className="d-flex flex-row">
            <span style={style.reviewText}>ﺔﻴﻤﻟﺎﻋ تﺎﻬﺟ ﻦﻣ هﺪﻤﺘﻌﻣ ﺎﻨﻳﺪﻟ تاروﺪﻟاو ﺪﻫﺎﻌﻤﻟا ﻊﻴﻤﺟ</span>
            <img src={review} alt="icon" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

const style = {
  btn: {
    height: 56,
    background: "#FD3E60",
    borderRadius: 8,
    width: 172,
    border:"none",
    alignSelf: 'flex-end',
    marginTop:48,
    marginBottom:48
  },
  reviewText:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0.2,
    color: '#6B6C7F',
    paddingRight:8
  },
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    color: "#35A7FF",
    
  },
  subtext: {
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: 18,
    color: "#6B6C7F",
    marginTop: 24,
  },
};
