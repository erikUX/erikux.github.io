/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WorkCard } from "../WorkCard";
import "./style.css";

export const Body = ({
  property,
  className,
  textClassName,
  titleClassName,
  bodyTextClassName,
  workCardImageClassName,
}) => {
  return (
    <div className={`body ${property} ${className}`}>
      <div className={`body-text ${bodyTextClassName}`}>
        <div className={`text ${textClassName}`}>
          <div className={`title ${titleClassName}`}>Chatbot European Commission</div>
          <div className="div">
            <div className="colored-text">
              <div className="paragraph">
                {property === "mobile" && (
                  <p className="text-wrapper-12">
                    As a UX Designer I was responsible for the UX of a chatbot for the European Commission.
                    <br />
                    <br />
                    My work started with extensive user research supported by my wireframes, and ended by delivering an
                    interactive prototype for users, which I tested with them.
                  </p>
                )}

                {property === "desktop" && (
                  <p className="text-wrapper-12">
                    As a UX Designer I was responsible for the UX of a chatbot for the European Commission. My work
                    started with extensive user research supported by my wireframes, and ended by delivering an
                    interactive prototype for users, which I tested with them.
                  </p>
                )}
              </div>
            </div>
            <div className="work-cards-mobile">
              {property === "mobile" && (
                <>
                  <WorkCard className="work-card-instance" hasHeadlineSubhead={false} imageClassName="instance-node" />
                  <WorkCard className="work-card-instance" hasHeadlineSubhead={false} imageClassName="instance-node" />
                  <WorkCard className="work-card-instance" hasHeadlineSubhead={false} imageClassName="instance-node" />
                </>
              )}

              {property === "desktop" && (
                <div className="stripe">
                  <WorkCard
                    className="work-card-instance"
                    hasHeadlineSubhead={false}
                    imageClassName={workCardImageClassName}
                  />
                  <WorkCard className="work-card-instance" hasHeadlineSubhead={false} imageClassName="instance-node" />
                  <WorkCard className="work-card-instance" hasHeadlineSubhead={false} imageClassName="instance-node" />
                </div>
              )}
            </div>
            <div className="colored-text">
              <p className="paragraph">
                Result: The chatbot was experienced as user-friendly and efficient by customer and users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Body.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
};
