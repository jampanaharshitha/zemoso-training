import React from "react";
export interface BoxProps {
  type: string;
  width?: string;
  height?: string;
}

const CheckBox = ({ type, width, height, ...props }: BoxProps) => {
  return (
    <>
      <input
        type={type}
        style={{ width: width, height: height }}
        height={height}
        className="CheckBox"
      />
    </>
  );
};

export default CheckBox;
