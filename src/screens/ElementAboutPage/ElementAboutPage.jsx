import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { Body } from "../../components/Body";
import { Footer } from "../../components/Footer";
import "./style.css";

export const ElementAboutPage = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="element-about-page"
      style={{
        display: screenWidth < 1280 ? "inline-flex" : screenWidth >= 1280 ? "flex" : undefined,
        minWidth: screenWidth >= 1280 ? "1280px" : undefined,
      }}
    >
      <div
        className="element-px-about-page"
        style={{
          display: screenWidth < 1280 ? "inline-flex" : screenWidth >= 1280 ? "flex" : undefined,
          width: screenWidth >= 1280 ? "1280px" : undefined,
        }}
      >
        {screenWidth < 1280 && (
          <>
            <Body className="body-instance" property="mobile" textClassName="body-2" titleClassName="body-3" />
            <Footer className="footer-3" property="mobile" />
          </>
        )}

        {screenWidth >= 1280 && (
          <Body
            bodyTextClassName="body-4"
            className="body-6"
            property="desktop"
            titleClassName="body-3"
            workCardImageClassName="body-5"
          />
        )}
      </div>
    </div>
  );
};
