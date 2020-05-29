import React from "react";
import checkmark from "../Assets/Icons/Checkmark.svg";
import { Button } from "react-bootstrap";

export default function SubscriptionCard(props) {
  return (
    <div className="subscription-card" style={{marginBottom:16}}>
      <div
        className="d-flex flex-column justify-content-center align-items-center subscription-card-header"
        style={{ height: 140 }}
      >
        <span style={style.title}>{props.title}</span>
        <span className={'subscription-card-desc'}>{props.desc}</span>
      </div>
      <div
        className="d-flex flex-column"
        style={{ height: 420, padding: 32 }}
      >
        {props.listData.map((listText) => (
          <div className="d-flex flex-row justify-content-end" >
            {" "}
            <span style={{...style.listText,width:"65%"}}>{listText}</span>
            <img src={checkmark} alt="icon" style={{ marginLeft: 26 }} />
          </div>
        ))}
        <Button style={style.btn}>{props.btnText}</Button>
      </div>

        
    </div>
  );
}

const style = {
  btn: {
    height: 56,
    background: "#FD3E60",
    borderRadius: 8,
  },
  title:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 21,
    marginBottom:4,
    color: '#191C1F'
  },

  listText:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    textAlign: 'right',
    marginBottom:8,
    color: '#6B6C7F',
    lineHeight: '28px',
    
  }
};
