import React from "react";
import Typography from "../../../atoms/typography";
import CheckBoxText from "../../../molecules/checkbox";
interface Props {
  object: {
    [a: number]: { text: string };
  };
  heading: string;
}
const Cards = ({ object, heading }: Props) => {
  return (
    <>
      <Typography type="div" text={heading} color="#65647C" />
      {Object.keys(object).map((k: any) => {
        return <CheckBoxText text={object[k]["text"]} type="div" />;
      })}
    </>
  );
};

export default Cards;
