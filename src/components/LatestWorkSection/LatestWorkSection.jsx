/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WorkCard } from "../WorkCard";
import "./style.css";

export const LatestWorkSection = ({
  property,
  className,
  workCardWorkCardClassName,
  workCardImageClassName,
  workCardImageClassNameOverride,
  workCardDivClassName,
  workCardWorkCardClassNameOverride,
  workCardDivClassNameOverride,
  workCardWorkCardClassName1,
  workCardImageClassName1,
  workCardImageClassName2,
  workCardWorkCardClassName2,
  workCardImageClassName3,
  workCardWorkCardClassName3,
  workCardWorkCardClassName4,
  workCardWorkCardClassName5,
  workCardImageClassName4,
  workCardWorkCardClassName6,
  to,
}) => {
  return (
    <div className={`latest-work-section property-13-${property} ${className}`}>
      <div className="text-wrapper-8">Portfolio selection</div>
      <div className="work-cards-mobile-2">
        {property === "mobile" && (
          <>
            <WorkCard
              className={workCardWorkCardClassName}
              divClassName="work-card-3"
              imageClassName="work-card-2"
              text="Chatbot"
              text1="European Commission"
            />
            <WorkCard
              className="work-card-4"
              divClassName="work-card-3"
              imageClassName={workCardImageClassName}
              text="Digital signage"
              text1="ING"
            />
            <WorkCard
              className="work-card-4"
              imageClassName={workCardImageClassNameOverride}
              text="Dutch travel app"
              text1="Ministry of Foreign Affairs"
            />
            <WorkCard
              className="work-card-4"
              imageClassName={workCardDivClassName}
              text="Gamification Health app"
              text1="ChangeKitchen"
            />
            <WorkCard
              className="work-card-4"
              divClassName="work-card-3"
              imageClassName="work-card-2"
              text="AR/VR at the workplace"
              text1="Atos AIR"
            />
            <WorkCard
              className="work-card-4"
              imageClassName="work-card-2"
              text="Callcenter &amp; Retail web app"
              text1="KPN"
            />
            <WorkCard className="work-card-4" imageClassName="work-card-2" text="WoonBalans Game" text1="SNS Reaal" />
          </>
        )}

        {property === "desktop" && (
          <>
            <div className="stripe-2">
              <WorkCard
                className={workCardWorkCardClassNameOverride}
                divClassName="work-card-3"
                imageClassName={workCardDivClassNameOverride}
                text="Chatbot"
                text1="European Commission"
                to={to}
              />
              <WorkCard
                className={workCardWorkCardClassName1}
                divClassName="work-card-3"
                imageClassName={workCardImageClassName1}
                text="Digital signage"
                text1="ING"
              />
              <WorkCard
                className={workCardWorkCardClassName2}
                imageClassName={workCardImageClassName2}
                text="Dutch travel app"
                text1="Ministry of Foreign Affairs"
              />
            </div>
            <div className="stripe-2">
              <WorkCard
                className={workCardWorkCardClassName3}
                imageClassName={workCardImageClassName3}
                text="Gamification Health app"
                text1="ChangeKitchen"
              />
              <WorkCard
                className={workCardWorkCardClassName4}
                divClassName="work-card-3"
                imageClassName="work-card-2"
                text="AR/VR at the workplace"
                text1="Atos AIR"
              />
              <WorkCard
                className={workCardWorkCardClassName5}
                imageClassName="work-card-2"
                text="Callcenter &amp; Retail web app"
                text1="KPN"
              />
            </div>
          </>
        )}
      </div>
      {property === "desktop" && (
        <WorkCard
          className={workCardWorkCardClassName6}
          imageClassName={workCardImageClassName4}
          text="WoonBalans Game"
          text1="SNS Reaal"
        />
      )}
    </div>
  );
};

LatestWorkSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  to: PropTypes.string,
};
