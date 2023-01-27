import { ComponentStory, Meta } from "@storybook/react";
import CheckBoxText from "./index";

const meta: Meta = {
  title: "molecules/checkBoxText",
  component: CheckBoxText,
};
export default meta;
const template: ComponentStory<typeof CheckBoxText> = (args) => (
  <CheckBoxText {...args} />
);

export const TextCheckBox = template.bind({});
TextCheckBox.args = {
  text: "text to checkbox",
  type: "span",
};
