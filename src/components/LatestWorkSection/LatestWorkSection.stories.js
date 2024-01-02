import { LatestWorkSection } from ".";

export default {
  title: "Components/LatestWorkSection",
  component: LatestWorkSection,
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
    workCardImageClassName: {},
    workCardImageClassNameOverride: {},
    workCardDivClassName: {},
  },
};
