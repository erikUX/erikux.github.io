/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ClientsSection } from "../ClientsSection";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LatestWorkSection } from "../LatestWorkSection";
import { Navigation } from "../Navigation";
import "./style.css";

export const ElementPortfolio = ({
  className,
  navigationIconEnvelopeSquare,
  navigationIconAlternatePhone,
  navigationIconSocialLinkedin,
  href,
  href1,
  href2,
  href3,
}) => {
  return (
    <div className={`element-portfolio ${className}`}>
      <div className="element-px-portfolio-2">
        <Navigation
          className="navigation-instance"
          href={href}
          href1={href1}
          iconAlternatePhone={navigationIconAlternatePhone}
          iconAlternatePhoneClassName="navigation-2"
          iconEnvelopeSquare={navigationIconEnvelopeSquare}
          iconEnvelopeSquareClassName="design-component-instance-node"
          iconSocialLinkedin={navigationIconSocialLinkedin}
          iconSocialLinkedinClassName="navigation-3"
          property="mobile"
        />
        <Header
          className="design-component-instance-node-2"
          property="mobile"
          text="Below a selection of UX work of the past 10 years:"
        />
        <LatestWorkSection
          className="design-component-instance-node-2"
          property="mobile"
          workCardDivClassName="latest-work-section-2"
          workCardImageClassName="latest-work-section-2"
          workCardImageClassNameOverride="latest-work-section-2"
          workCardWorkCardClassName="latest-work-section-instance"
        />
        <ClientsSection className="clients-section-instance" property="mobile" />
        <Footer className="design-component-instance-node-2" href={href2} href1={href3} property="mobile" />
      </div>
    </div>
  );
};

ElementPortfolio.propTypes = {
  navigationIconEnvelopeSquare: PropTypes.string,
  navigationIconAlternatePhone: PropTypes.string,
  navigationIconSocialLinkedin: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
};
