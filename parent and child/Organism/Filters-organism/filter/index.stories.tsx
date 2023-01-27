import { Meta } from "@storybook/react";
import Filter from "./index";
import React from "react";

const meta:Meta={
    title:"organisms/filters",
    component:Filter,
}

export default meta 

const template =()=><Filter /> 
export const filters = template.bind({})