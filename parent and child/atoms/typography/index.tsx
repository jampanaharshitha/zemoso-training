import React from "react";
import Typography from '@mui/material/Typography';
interface Props {
  type: string;
  text: string;
  className?: string;
  color?: string;
  fontFamily?: string,
  variant1?: any;
}
const typography = ({ type, text, color, fontFamily, ...props }: Props) => {
  return <Typography variant={props.variant1}>{text}</Typography>;
};
export default typography;
