import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
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
    footerInfoClassName: {},
  },
};
