import { Navigation } from ".";

export default {
  title: "Components/Navigation",
  component: Navigation,
  argTypes: {
    property: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "desktop",
    className: {},
    iconEnvelopeSquareClassName: {},
    iconEnvelopeSquare: "/img/icon-envelope-square-1.png",
    iconAlternatePhoneClassName: {},
    iconAlternatePhone: "/img/icon-alternate-phone-square-2.png",
    iconSocialLinkedinClassName: {},
    iconSocialLinkedin: "/img/icon-social-linkedin-2.png",
    navNavMenuClassName: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
