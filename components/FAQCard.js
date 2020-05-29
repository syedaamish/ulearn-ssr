import React from 'react'
import { Row, Col } from 'react-bootstrap'
import plus from "../Assets/Icons/plus.svg"

export const FAQCard = () => {
    return (
        <div className="faq-card" >
            <div className="container">
                <div className="d-flex justify-content-center" style={style.heaader}>
                <span >أسئلة مكررة</span>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'0 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'0 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{borderBottom: '1px solid #E3E9EF',padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between" style={{padding:'24px 0 24px 0'}}>
                            <img src={plus} alt="icon"/>
                            <span>ما البرامج والأجهزة التي أحتاجها؟</span>
                        </div>
                    </Col>
                    <Col md={6}>
                        <span>شاهد عينة من الفصل</span>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


const style = {
   
    heaader: {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 30,
      color: "#191C1F",
      marginBottom: 60,
    //   marginTop: 115,
    },
  };