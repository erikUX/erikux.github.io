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
  workCardImageClassName,
  workCardImageClassNameOverride,
  workCardDivClassName,
}) => {
  return (
    <div className={`latest-work-section property-6-${property} ${className}`}>
      <div className="text-wrapper-4">Portfolio selection</div>
      <div className="work-cards-mobile">
        {property === "mobile" && (
          <>
            <WorkCard
              className="work-card-instance"
              divClassName="work-card-2"
              imageClassName="instance-node"
              text="Chatbot"
              text1="European Commission"
            />
            <WorkCard
              className="work-card-instance"
              divClassName="work-card-2"
              imageClassName={workCardImageClassName}
              text="Digital signage"
              text1="ING"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName={workCardImageClassNameOverride}
              text="Dutch travel app"
              text1="Ministry of Foreign Affairs"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName={workCardDivClassName}
              text="Gamification Health app"
              text1="ChangeKitchen"
            />
            <WorkCard
              className="work-card-instance"
              divClassName="work-card-2"
              imageClassName="instance-node"
              text="AR/VR at the workplace"
              text1="Atos AIR"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="Callcenter &amp; Retail web app"
              text1="KPN"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="WoonBalans Game"
              text1="SNS Reaal"
            />
          </>
        )}

        {property === "desktop" && (
          <>
            <div className="stripe">
              <WorkCard
                className="work-card-instance"
                divClassName="work-card-2"
                imageClassName="instance-node"
                text="Chatbot"
                text1="European Commission"
              />
              <WorkCard
                className="work-card-instance"
                divClassName="work-card-2"
                imageClassName="instance-node"
                text="Digital signage"
                text1="ING"
              />
              <WorkCard
                className="work-card-instance"
                imageClassName="instance-node"
                text="Dutch travel app"
                text1="Ministry of Foreign Affairs"
              />
            </div>
            <div className="stripe">
              <WorkCard
                className="work-card-instance"
                imageClassName="instance-node"
                text="Gamification Health app"
                text1="ChangeKitchen"
              />
              <WorkCard
                className="work-card-instance"
                divClassName="work-card-2"
                imageClassName="instance-node"
                text="AR/VR at the workplace"
                text1="Atos AIR"
              />
              <WorkCard
                className="work-card-instance"
                imageClassName="instance-node"
                text="Callcenter &amp; Retail web app"
                text1="KPN"
              />
            </div>
          </>
        )}
      </div>
      {property === "desktop" && (
        <WorkCard
          className="work-card-instance"
          imageClassName="instance-node"
          text="WoonBalans Game"
          text1="SNS Reaal"
        />
      )}
    </div>
  );
};

LatestWorkSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
};
