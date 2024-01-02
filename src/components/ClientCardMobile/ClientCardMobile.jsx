/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AuthorImages } from "../AuthorImages";
import "./style.css";

export const ClientCardMobile = ({
  className,
  divClassName,
  text = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  voornaamAchterRolClassName,
  text1 = "Voornaam, achter<br/>",
  spanClassName,
  text2 = "Rol<br/>Bedrijf",
  authorImagesProperty = "author-image-1",
  authorImagesPropertyAuthorClassName,
}) => {
  return (
    <div className={`client-card-mobile ${className}`}>
      <div className="client-card">
        <p className={`this-is-a-template ${divClassName}`}>{text}</p>
        <div className="client-info">
          <AuthorImages className={authorImagesPropertyAuthorClassName} property={authorImagesProperty} />
          <div className="rate">
            <p className={`voornaam-achter-rol ${voornaamAchterRolClassName}`}>
              <span className="text-wrapper-9">{text1}</span>
              <span className={`text-wrapper-10 ${spanClassName}`}>{text2}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ClientCardMobile.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  authorImagesProperty: PropTypes.string,
};
