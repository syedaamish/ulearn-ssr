import React from "react";
import { Row, Col } from "react-bootstrap";
import plus from "../Assets/Icons/plus.svg";
import faqImage from "../Assets/Images/faq_placeholder.png";
import Phone from "../Assets/Icons/phone";

export const FAQCard = () => {
  return (
    <div className="faq-card">
      <div className="container">
        <div className="d-flex justify-content-center" style={style.heaader}>
          <span>أسئلة مكررة</span>
        </div>
        <Row>
          <Col md={6} style={{padding: '0 24px'}} className="res-padding-bottom">
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "0 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}> ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>ما البرامج والأجهزة التي أحتاجها؟</span>
            </div>
            <div className="res-padding-bottom">
            <div
              className="d-flex flex-row justify-content-between"
              style={{
                borderBottom: "1px solid #E3E9EF",
                padding: "24px 0 24px 0",
              }}
            >
              <img src={plus} alt="icon" />
              <span style={style.title}>التي أحتاجها؟</span>
            </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end flex-column">
              <div className="d-flex justify-content-end" style={{paddingBottom:18}}>
                <span style={{ ...style.text, color: "#35A7FF", fontSize: 17 }}>
                  شاهد عينة من الفصل
                </span>
              </div>
              <div className="d-flex justify-content-end">
                <img src={faqImage} alt="img" width={'100%'} height={"100%"} />
              </div>
              <div
                className="d-flex justify-content-between"
                style={{
                  borderBottom: "1px solid #E3E9EF",paddingBottom:27,paddingTop:40
                }}
              >
                <div className="d-flex flex-row align-items-end">
                  <Phone color="#FD3E60"/>
                  <span
                    style={{
                      ...style.style,
                      color: "#FD3E60",
                      fontSize: 17,
                      marginLeft: 10,
                      fontWeight: "normal",
                    }}
                  >
                    (+965) 66687847
                  </span>
                </div>
                <div className="d-flex flex-column">
                  <span style={style.text}>؟ﺔﻴﻧﺎﺛ ﺔﻠﺌﺳا كﺪﻨﻋ</span>
                  <span
                    style={{
                      ...style.text,
                      fontSize: 17,
                      fontWeight: "normal",
                    }}
                  >
                    بﺎﺴﺗاﻮﻟا ﺮﺒﻋ ﺎﻨﻌﻣ ﻞﺻاﻮﺗ
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const style = {
  heaader: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    color: "#191C1F",
    marginBottom: 60,
    //   marginTop: 115,
  },
  title: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 1.5888,
    color: "#222528",
  },
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    color: "#191C1F",
  },
};
