import React from "react";
import workImg from "../assets/work.png";

const Work = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
        height: "30rem",
      }}
    >
      <img src={workImg} alt="under work in progress" />
    </div>
  );
};

export default Work;
