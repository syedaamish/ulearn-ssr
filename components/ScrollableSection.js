import React from "react";
import ilts from "../Assets/Icons/ilts.svg";
import flag1 from "../Assets/Icons/flag1.svg";
import spainFlag from "../Assets/Icons/flagSpain.svg";
import franceFlag from "../Assets/Icons/flagFrance.svg";
import flagUk from "../Assets/Icons/flagUk.svg";

export default function ScrollableSection() {
  return (
    <div>
      <div
        className="d-flex justify-content-center w-100"
        style={{ padding: "40px 0 60px 0" }}
      >
        <span className="scroll-header">ﻢﻠﻌﺗا نا ﺪﻳرا</span>
      </div>
      <div style={{ margin: "0 -40px 0 -80px  " }}>
        <div
          className="d-flex justify-content-between w-100 row image-holder-container"
          style={{ padding: "0  0 0 100px" }}
        >
          {/* <div style={{padding:"60px 0 60px 0"}}> */}
          <div className="image-holder ">
            <div
              className="d-flex flex-column justify-content-between w-100 h-100"
              style={{ padding: 25 }}
            >
              <div className="d-flex justify-content-end">
                <img src={ilts} alt="icon" />
              </div>
              <span style={{ ...style.text, textAlign: "end" }}>ستليآلا</span>
            </div>
          </div>
          <div className="image-holder ">
            <div
              className="d-flex flex-column justify-content-between w-100 h-100"
              style={{ padding: 25 }}
            >
              <div className="d-flex justify-content-end">
                <img src={flag1} alt="icon" />
              </div>
              <span style={{ ...style.text, textAlign: "end" }}>ستليآلا</span>
            </div>
          </div>
          <div className="image-holder ">
            <div
              className="d-flex flex-column justify-content-between w-100 h-100"
              style={{ padding: 25 }}
            >
              <div className="d-flex justify-content-end">
                <img src={spainFlag} alt="icon" />
              </div>
              <span style={{ ...style.text, textAlign: "end" }}>ستليآلا</span>
            </div>
          </div>
          <div className="image-holder ">
            <div
              className="d-flex flex-column justify-content-between w-100 h-100"
              style={{ padding: 25 }}
            >
              <div className="d-flex justify-content-end">
                <img src={franceFlag} alt="icon" />
              </div>
              <span style={{ ...style.text, textAlign: "end" }}>ستليآلا</span>
            </div>
          </div>
          <div className="image-holder ">
            <div
              className="d-flex flex-column justify-content-between w-100 h-100"
              style={{ padding: 25 }}
            >
              <div className="d-flex justify-content-end">
                <img src={flagUk} alt="icon" />
              </div>
              <span style={{ ...style.text, textAlign: "end" }}>ستليآلا</span>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

const style = {
  text: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "right",
    color: "#FFFFFF",
  },
};
