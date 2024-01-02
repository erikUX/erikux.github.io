import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
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
    text:
      "With my eye for detail and my user-centric approach, <br/>I am able to translate concept ideas into user-friendly designs.",
  },
};
