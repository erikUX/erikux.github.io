import { Body } from ".";

export default {
  title: "Components/Body",
  component: Body,
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
    textClassName: {},
    titleClassName: {},
    bodyTextClassName: {},
    workCardImageClassName: {},
  },
};
