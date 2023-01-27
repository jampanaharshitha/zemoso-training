import { ComponentStory, Meta } from "@storybook/react";
import CheckBox from "./index";
const meta: Meta = {
  title: "atoms/button",
  component: CheckBox,
  argTypes: {
    width: {
      defaultValue: "18px",
    },
    height: {
      defaultValue: "18px",
    },
  },
};
export default meta;

const fun: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};
export const checkBox = fun.bind({});
checkBox.args = {
  type: "checkbox",
};
