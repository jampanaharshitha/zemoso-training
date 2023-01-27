import { ComponentStory, Meta } from "@storybook/react";
import theme from "../../themes/Theme"; 
import Typography from "./index";
const meta: Meta = {
  title: "atoms/typography",
  component: Typography,
  argTypes: {
    className: {
      defaultValue: "cls",
    },
  },
};
export default meta;
const template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);
export const Span = template.bind({});
Span.args = {
  type: "span",
  text: "Typography",
  className: "div-class",
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
};
