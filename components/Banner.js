import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import banner from "../Assets/Images/head_placeholder.png";
import review from "../Assets/Icons/review.svg";

export const Banner = () => {
  return (
    <Row className="res-banner-reverse">
      <Col md={6}>
        {/* <div style={{...style.imgHolder,backgroundImage:`url(${banner})`}}/> */}
        <img src={banner} alt="img" width={"100%"} height={"100%"} />
      </Col>
      <Col md={6}>
        <div className="banner-padding-top">
          <div className="d-flex flex-column">
            <span className="restext-align-center" style={style.text}> ﺔﻐﻠﻟا ﻢﻠﻌﺗ</span>
            <span className="restext-align-center" style={{ ...style.text, color: "#010101" }}>
              ﺖﻴﺒﻟا ﻲﻓ ﺖﻧاو
            </span>
            <span className="restext-align-center" style={style.subtext}>
              <p style={{marginBottom:0}}>نﺮﻴﻟﻮﻳ ﻲﻓ ﻚﺑ ً</p>
              ﺎﻠﻫا ﻚﺘﻴﺑ ﻦﻣ ﻚﺒﺳﺎﻨﺗ ﻲﺘﻟا تﺎﻗوﺄﻟا ﻲﻓو رﺎﻌﺳﺄﻟا ﻞﻗﺄﺑ
              ﺎﻫﺪﻳﺮﺗ ﻲﺘﻟا ﺔﻐﻠﻟا ﻢﻠﻌﺗ نﺂﻟا ﻚﻨﻜﻤﻳ ﻪﻋﺎﻤﺳ + ﺖﻧﺮﺘﻧا + دﺎﺒﻳا/بﻮﺘﺑﺎﻟ
              ﻪﺟﺎﺘﺤﺗ ﺎﻣ ﻞﻛ
            </span>
            <div className="restext-align-center">
            <Button style={style.btn}>ﻢﻠﻌﺘﻟا أﺪﺑا</Button>

            </div>
          </div>
          <div className="res-section-center">
            <span style={style.reviewText}>ﺔﻴﻤﻟﺎﻋ تﺎﻬﺟ ﻦﻣ هﺪﻤﺘﻌﻣ ﺎﻨﻳﺪﻟ تاروﺪﻟاو ﺪﻫﺎﻌﻤﻟا ﻊﻴﻤﺟ</span>
           <div>
           <img  src={review} alt="icon" />
           </div>
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
  imgHolder: {
    height: "100%",
    width: '100%',
    backgroundColor: "transparent",
    borderRadius: 4,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  reviewText:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    width:157,
    paddingBottom:16,
    fontSize: 12,
    lineHeight:2.5,
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
    lineHeight:2.5,
    color: "#6B6C7F",
    marginTop: 24,
  },
};
