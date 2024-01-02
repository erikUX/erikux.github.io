/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import "./style.css";

export const Navigation = ({
  property,
  className,
  iconEnvelopeSquareClassName,
  iconEnvelopeSquare = "/img/icon-envelope-square-3.png",
  iconAlternatePhoneClassName,
  iconAlternatePhone = "/img/icon-alternate-phone-square-2.png",
  iconSocialLinkedinClassName,
  iconSocialLinkedin = "/img/icon-social-linkedin-2.png",
  href,
  href1,
}) => {
  return (
    <div className={`navigation ${property} ${className}`}>
      {property === "desktop" && (
        <div className="nav-nav-menu">
          <div className="div">erik.kuiper@outlook.com</div>
          <div className="text-wrapper-2">+31610314881</div>
          <div className="text-wrapper-3">LinkedIn</div>
        </div>
      )}

      <Logo className="logo-instance" />
      {property === "mobile" && (
        <>
          <a href={href} rel="noopener noreferrer" target="_blank">
            <img
              className={`icon-envelope-square ${iconEnvelopeSquareClassName}`}
              alt="Icon envelope square"
              src={iconEnvelopeSquare}
            />
          </a>
          <img
            className={`icon-alternate-phone ${iconAlternatePhoneClassName}`}
            alt="Icon alternate phone"
            src={iconAlternatePhone}
          />
          <a href={href1} rel="noopener noreferrer" target="_blank">
            <img
              className={`icon-social-linkedin ${iconSocialLinkedinClassName}`}
              alt="Icon social linkedin"
              src={iconSocialLinkedin}
            />
          </a>
        </>
      )}
    </div>
  );
};

Navigation.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  iconEnvelopeSquare: PropTypes.string,
  iconAlternatePhone: PropTypes.string,
  iconSocialLinkedin: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
