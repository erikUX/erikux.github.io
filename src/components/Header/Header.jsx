/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  property,
  className,
  text = "With my eye for detail and my user-centric approach, <br/>I am able to translate concept ideas into user-friendly designs.",
}) => {
  return (
    <div className={`header property-${property} ${className}`}>
      <div className="div-2">
        <div className="headline-subhead">
          <div className="headline-subhead-2">
            <div className="interaction-design">
              {property === "desktop" && (
                <p className="text-wrapper-11">Interaction Design · Usability · User Experience</p>
              )}

              {property === "mobile" && <p className="text-wrapper-11">Interaction Design · Usability · UX</p>}
            </div>
            <div className="portfolio-erik">
              Portfolio
              <br />
              Erik Kuiper
            </div>
          </div>
          <div className="and-i-made-it-myself">
            {property === "desktop" && (
              <p className="text-wrapper-11">
                With my eye for detail and my user-centric approach, <br />I am able to translate concept ideas into
                user-
                <br />
                friendly designs.
              </p>
            )}

            {property === "mobile" && <p className="text-wrapper-11">{text}</p>}
          </div>
        </div>
        {property === "desktop" && <div className="image" />}
      </div>
    </div>
  );
};

Header.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
};
