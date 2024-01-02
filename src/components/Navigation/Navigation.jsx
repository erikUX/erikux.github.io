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
  iconEnvelopeSquare = "/img/icon-envelope-square-1.png",
  iconAlternatePhoneClassName,
  iconAlternatePhone = "/img/icon-alternate-phone-square-2.png",
  iconSocialLinkedinClassName,
  iconSocialLinkedin = "/img/icon-social-linkedin-2.png",
  navNavMenuClassName,
  divClassName,
  divClassNameOverride,
  href,
  href1,
  href2,
  href3,
}) => {
  return (
    <div className={`navigation property-5-${property} ${className}`}>
      {property === "desktop" && (
        <div className={`nav-nav-menu ${navNavMenuClassName}`}>
          <a className={`text-wrapper-5 ${divClassName}`} href={href2} rel="noopener noreferrer" target="_blank">
            erik.kuiper@outlook.com
          </a>
          <div className="text-wrapper-6">+31610314881</div>
          <a
            className={`text-wrapper-7 ${divClassNameOverride}`}
            href={href3}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
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
            className={`icon-alternate-phone-2 ${iconAlternatePhoneClassName}`}
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
  href2: PropTypes.string,
  href3: PropTypes.string,
};
