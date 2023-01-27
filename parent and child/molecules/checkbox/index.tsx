import React from "react";
import CheckBox, { BoxProps } from "../../atoms/CheckBox/";
import Typography from "../../atoms/typography/";

interface Props extends BoxProps {
  text: string;
  type: string;
}

const CheckBoxText = ({ text, type, ...props }: Props) => {
  return (
    <div className="check-box-text" style={{ display: "flex" }}>
      <CheckBox type={"checkbox"} {...props} />
      <Typography type={type} text={text} />
    </div>
  );
};

export default CheckBoxText;
