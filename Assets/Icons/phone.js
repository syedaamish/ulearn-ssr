import React from "react";

function Phone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ? props.width : "16"}
      height={props.height ? props.height : "16"}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={props.color}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.667 11.28v2a1.332 1.332 0 01-1.453 1.333 13.194 13.194 0 01-5.754-2.046 13.001 13.001 0 01-4-4 13.193 13.193 0 01-2.046-5.78A1.333 1.333 0 012.74 1.333h2A1.333 1.333 0 016.074 2.48a8.56 8.56 0 00.466 1.873 1.333 1.333 0 01-.3 1.407l-.846.847a10.667 10.667 0 004 4l.846-.847a1.333 1.333 0 011.407-.3 8.56 8.56 0 001.873.467 1.334 1.334 0 011.147 1.353z"
      ></path>
    </svg>
  );
}

export default Phone;
