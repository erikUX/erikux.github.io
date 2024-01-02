import React from "react";
import { ClientsSection } from "../../components/ClientsSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestWorkSection } from "../../components/LatestWorkSection";
import { Navigation } from "../../components/Navigation";
import "./style.css";

export const ElementPortfolio = () => {
  return (
    <div className="element-portfolio">
      <Navigation
        className="navigation-instance"
        href="mailto:erik.kuiper@outlook.com"
        href1="https://www.linkedin.com/in/erikux/"
        iconAlternatePhone="/img/icon-alternate-phone-square-1.png"
        iconAlternatePhoneClassName="navigation-2"
        iconEnvelopeSquare="/img/icon-envelope-square-2.png"
        iconEnvelopeSquareClassName="design-component-instance-node"
        iconSocialLinkedin="/img/icon-social-linkedin-1.png"
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
        workCardDivClassName="latest-work-section-instance"
        workCardImageClassName="latest-work-section-instance"
        workCardImageClassNameOverride="latest-work-section-instance"
      />
      <ClientsSection className="clients-section-instance" property="mobile" />
      <Footer
        className="design-component-instance-node-2"
        href="mailto:erik.kuiper@outlook.com"
        href1="https://www.linkedin.com/in/erikux/"
        property="mobile"
      />
    </div>
  );
};
