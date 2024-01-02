import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ElementPortfolio } from "../../components/ElementPortfolio";
import { ElementPxPortfolio } from "../../components/ElementPxPortfolio";
import "./style.css";

export const Frame = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="frame">
      <div
        className="element-portfolio-wrapper"
        style={{
          height: screenWidth < 1312 ? "5976.03px" : screenWidth >= 1312 ? "4330px" : undefined,
          width: screenWidth < 1312 ? "375px" : screenWidth >= 1312 ? "1312px" : undefined,
        }}
      >
        {screenWidth < 1312 && (
          <ElementPortfolio
            className="element-portfolio-instance"
            href="mailto:erik.kuiper@outlook.com"
            href1="https://www.linkedin.com/in/erikux/"
            href2="mailto:erik.kuiper@outlook.com"
            href3="https://www.linkedin.com/in/erikux/"
            navigationIconAlternatePhone="/img/icon-alternate-phone-square.png"
            navigationIconEnvelopeSquare="/img/icon-envelope-square.png"
            navigationIconSocialLinkedin="/img/icon-social-linkedin.png"
          />
        )}

        {screenWidth >= 1312 && (
          <ElementPxPortfolio
            className="element-portfolio-instance"
            href="mailto:erik.kuiper@outlook.com"
            href1="https://www.linkedin.com/in/erikux/"
            to="/1280px-about-page-all-breakpoints"
          />
        )}
      </div>
    </div>
  );
};
