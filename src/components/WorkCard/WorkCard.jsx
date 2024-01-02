/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const WorkCard = ({
  className,
  imageClassName,
  hasHeadlineSubhead = true,
  divClassName,
  text = "Project title",
  text1 = "UI, Art drection",
  to,
}) => {
  return (
    <Link className={`work-card ${className}`} to={to}>
      <div className={`image ${imageClassName}`} />
      {hasHeadlineSubhead && (
        <div className="headline-subhead">
          <div className={`project-title ${divClassName}`}>{text}</div>
          <div className="UI-art-drection">{text1}</div>
        </div>
      )}
    </Link>
  );
};

WorkCard.propTypes = {
  hasHeadlineSubhead: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  to: PropTypes.string,
};
