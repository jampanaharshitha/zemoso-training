import { ComponentStory, Meta } from "@storybook/react";
import React from "react";
import Cards from "./index";

const meta: Meta = {
  title: "organism/organisms",
  component: Cards,
};
export default meta;
const template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;
export const Status = template.bind({});
export const Adjudication = template.bind({});
Status.args = {
  heading: "Status",
  object: {
    0: { text: "All Status" },
    1: { text: "Clear" },
    2: { text: "Consider" },
  },
};
Adjudication.args = {
  heading: "Adjudication",
  object: {
    0: { text: "All" },
    1: { text: "Engaged" },
    2: { text: "pre Adverse Action" },
  },
};
