import { AuthorImages } from ".";

export default {
  title: "Components/AuthorImages",
  component: AuthorImages,
  argTypes: {
    property: {
      options: ["property-6", "property-5", "author-image-2", "author-image-3", "author-image-1", "property-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "property-6",
    className: {},
  },
};
