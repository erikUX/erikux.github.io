/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WorkCard = ({
  className,
  imageClassName,
  divClassName,
  text = "Project title",
  text1 = "UI, Art drection",
}) => {
  return (
    <div className={`work-card ${className}`}>
      <div className={`image-2 ${imageClassName}`} />
      <div className="headline-subhead-3">
        <div className={`project-title ${divClassName}`}>{text}</div>
        <div className="UI-art-drection">{text1}</div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
