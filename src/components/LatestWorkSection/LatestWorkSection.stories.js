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
    workCardWorkCardClassName: {},
    workCardImageClassName: {},
    workCardImageClassNameOverride: {},
    workCardDivClassName: {},
    workCardWorkCardClassNameOverride: {},
    workCardDivClassNameOverride: {},
    workCardWorkCardClassName1: {},
    workCardImageClassName1: {},
    workCardImageClassName2: {},
    workCardWorkCardClassName2: {},
    workCardImageClassName3: {},
    workCardWorkCardClassName3: {},
    workCardWorkCardClassName4: {},
    workCardWorkCardClassName5: {},
    workCardImageClassName4: {},
    workCardWorkCardClassName6: {},
  },
};
