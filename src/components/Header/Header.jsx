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
  text1 = "With my eye for detail and my user-centric approach, <br/>I am able to translate concept ideas into user-<br/>friendly designs.",
}) => {
  return (
    <div className={`header property-6-${property} ${className}`}>
      <div className="div-2">
        <div className="headline-subhead-2">
          <div className="headline-subhead-3">
            <div className="interaction-design">
              {property === "desktop" && (
                <p className="text-wrapper-12">Interaction Design · Usability · User Experience</p>
              )}

              {property === "mobile" && <p className="text-wrapper-12">Interaction Design · Usability · UX</p>}
            </div>
            <div className="portfolio-erik">
              Portfolio
              <br />
              Erik Kuiper
            </div>
          </div>
          <div className="and-i-made-it-myself">
            {property === "desktop" && <p className="text-wrapper-12">{text1}</p>}

            {property === "mobile" && <p className="text-wrapper-12">{text}</p>}
          </div>
        </div>
        {property === "desktop" && <div className="image-2" />}
      </div>
    </div>
  );
};

Header.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
