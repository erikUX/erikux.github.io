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

export const ElementPxPortfolio = ({ className, href, href1, to }) => {
  return (
    <div className={`element-px-portfolio ${className}`}>
      <div className="element-portfolio-2">
        <Navigation
          className="navigation-4"
          divClassName="navigation-6"
          divClassNameOverride="navigation-6"
          href2={href}
          href3={href1}
          navNavMenuClassName="navigation-5"
          property="desktop"
        />
        <Header
          className="design-component-instance-node-3"
          property="desktop"
          text1={
            <>
              With my eye for detail and my user-centric approach, <br />I am able to translate concept ideas into user-
              <br />
              friendly designs.
              <br />
              <br />
              Below a selection of UX work of the past 10 years:
            </>
          }
        />
        <LatestWorkSection
          className="latest-work-section-3"
          property="desktop"
          to={to}
          workCardDivClassNameOverride="latest-work-section-5"
          workCardImageClassName1="latest-work-section-5"
          workCardImageClassName2="latest-work-section-5"
          workCardImageClassName3="latest-work-section-5"
          workCardImageClassName4="latest-work-section-5"
          workCardWorkCardClassName1="latest-work-section-4"
          workCardWorkCardClassName2="latest-work-section-4"
          workCardWorkCardClassName3="latest-work-section-4"
          workCardWorkCardClassName4="latest-work-section-4"
          workCardWorkCardClassName5="latest-work-section-4"
          workCardWorkCardClassName6="latest-work-section-4"
          workCardWorkCardClassNameOverride="latest-work-section-4"
        />
        <ClientsSection
          className="design-component-instance-node-3"
          clientCardMobileAuthorImagesPropertyAuthorClassName="clients-section-2"
          clientCardMobileAuthorImagesPropertyAuthorClassNameOverride="clients-section-2"
          clientCardMobileAuthorImagesPropertyClassName="clients-section-2"
          clientCardMobileText={
            <>
              Operational Director
              <br />
              AIR
            </>
          }
          property="desktop"
        />
        <Footer className="footer-instance" footerInfoClassName="footer-2" property="desktop" />
      </div>
    </div>
  );
};

ElementPxPortfolio.propTypes = {
  href: PropTypes.string,
  href1: PropTypes.string,
  to: PropTypes.string,
};
