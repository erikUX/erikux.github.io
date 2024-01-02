import { ClientsSection } from ".";

export default {
  title: "Components/ClientsSection",
  component: ClientsSection,
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
  },
};
