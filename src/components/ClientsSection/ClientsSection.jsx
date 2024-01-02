/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ClientCardMobile } from "../ClientCardMobile";
import "./style.css";

export const ClientsSection = ({
  property,
  className,
  clientCardMobileText = "Operational Director<br/>Atos AIR",
  clientCardMobileAuthorImagesPropertyAuthorClassName,
  clientCardMobileAuthorImagesPropertyAuthorClassNameOverride,
  clientCardMobileAuthorImagesPropertyClassName,
}) => {
  return (
    <div className={`clients-section property-14-${property} ${className}`}>
      <div className="client-cards">
        <div className="text-wrapper-11">Recommendations</div>
        <div className="clients-cards">
          <ClientCardMobile
            authorImagesProperty="author-image-1"
            authorImagesPropertyAuthorClassName="client-card-mobile-instance"
            className={`${property === "mobile" ? "class" : "client-card-mobile-instance"}`}
            divClassName="client-card-mobile-4"
            spanClassName="client-card-mobile-3"
            text={
              property === "mobile" ? (
                "Erik is a great networker and teamplayer, as he has the ability to connect the right people, technology and project to power progress!"
              ) : (
                <>
                  Erik plays a pivotal role in exploring new technologies and innovations. <br />
                  <br />
                  Erik is a great networker and teamplayer, as he has the ability to connect the right people,
                  technology and project to power progress!
                </>
              )
            }
            text1={
              <>
                Marianne Hewlett
                <br />
              </>
            }
            text2={
              <>
                Senior VicePresident
                <br />
                Atos
              </>
            }
            voornaamAchterRolClassName="client-card-mobile-2"
          />
          <ClientCardMobile
            authorImagesProperty="author-image-2"
            authorImagesPropertyAuthorClassName="client-card-mobile-instance"
            className={`${property === "mobile" ? "class" : "client-card-mobile-instance"}`}
            divClassName="client-card-mobile-4"
            spanClassName="client-card-mobile-3"
            text={
              property === "mobile" ? (
                <>
                  Erik is a true perfectionist with great eye for the needs of our users. <br />
                  <br />
                  His personality, out of the box ideas, and dedication to our project, were of great importance to our
                  team.
                </>
              ) : (
                <>
                  I worked with Erik on the development of the Dutch Travel app. In his role as interaction designer,
                  Erik has been a great asset to the team. <br />
                  <br />
                  He is a true perfectionist with great eye for the needs of our users. <br />
                  <br />
                  His personality, out of the box ideas, and dedication to our project, were of great importance to our
                  team.
                </>
              )
            }
            text1={
              <>
                Maaike Snijders-Betlem
                <br />
              </>
            }
            text2={
              <>
                Coordinator <br />
                Ministry of Foreign Affairs
              </>
            }
            voornaamAchterRolClassName="client-card-mobile-2"
          />
          <ClientCardMobile
            authorImagesProperty="author-image-3"
            authorImagesPropertyAuthorClassName="client-card-mobile-instance"
            className={`${property === "mobile" ? "class" : "client-card-mobile-instance"}`}
            divClassName="client-card-mobile-4"
            spanClassName="client-card-mobile-3"
            text={
              property === "mobile" ? (
                "Thanks to the efforts of Erik KPN made a huge step forward in the standards of a user-friendly application."
              ) : (
                <>
                  Erik in our project as an interaction designer and UX specialist proven itself as a true professional.{" "}
                  <br />
                  <br />
                  The result may also be called: Blazing enthusiastic end-users who have nothing but praise about their
                  new application! <br />
                  <br />
                  Thanks to the efforts of Erik KPN made a huge step forward in the standards of a user-friendly
                  application.
                </>
              )
            }
            text1={
              <>
                Jody van der Torn
                <br />
              </>
            }
            text2={
              <>
                ProductOwner
                <br />
                KPN
              </>
            }
            voornaamAchterRolClassName="client-card-mobile-2"
          />
        </div>
      </div>
      {property === "desktop" && (
        <div className="client-cards-2">
          <div className="text-2">{""}</div>
          <div className="clients-cards-2">
            <ClientCardMobile
              authorImagesProperty="author-image-1"
              authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesPropertyAuthorClassName}
              className="client-card-mobile-instance"
              divClassName="client-card-mobile-4"
              spanClassName="client-card-mobile-3"
              text={
                <>
                  Erik is always full of new and creative ideas and on top of new innovations in the market. He has an
                  excellent feeling for user experience. <br />
                  <br />
                  His enthusiasm and positive attitude is contagiously and inspiring.
                </>
              }
              text1={
                <>
                  Edwin ter Borg
                  <br />
                </>
              }
              text2={
                <>
                  Region Director
                  <br />
                  Atos Groningen
                </>
              }
              voornaamAchterRolClassName="client-card-mobile-2"
            />
            <ClientCardMobile
              authorImagesProperty="author-image-2"
              authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesPropertyAuthorClassNameOverride}
              className="client-card-mobile-instance"
              divClassName="client-card-mobile-4"
              spanClassName="client-card-mobile-3"
              text={
                <>
                  I had the pleasure to work with Erik on several Gamification and Virtual Reality projects. <br />
                  <br />
                  Without him Gamification wouldn&#39;t have been what it is nowadays within Atos. <br />
                  <br />
                  Teaching our Gamification courses within and outside Atos, is a fun experience and hope to work with
                  him on even more projects in the future.
                </>
              }
              text1={
                <>
                  Danny Oldenhave
                  <br />
                </>
              }
              text2={clientCardMobileText}
              voornaamAchterRolClassName="client-card-mobile-2"
            />
            <ClientCardMobile
              authorImagesProperty="author-image-3"
              authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesPropertyClassName}
              className="client-card-mobile-instance"
              divClassName="client-card-mobile-4"
              spanClassName="client-card-mobile-3"
              text={
                <>
                  I got to know Erik as an enthusiastic and driven person.
                  <br />
                  <br />
                  With vision and expertise, he is able to clearly formulate possibilities and perspectives for a
                  specific question and provide advice in a pleasant manner.
                </>
              }
              text1={
                <>
                  Pim-Martijn Sanders
                  <br />
                </>
              }
              text2={
                <>
                  Decoration Designer
                  <br />
                  Efteling
                </>
              }
              voornaamAchterRolClassName="client-card-mobile-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

ClientsSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  clientCardMobileText: PropTypes.string,
};
