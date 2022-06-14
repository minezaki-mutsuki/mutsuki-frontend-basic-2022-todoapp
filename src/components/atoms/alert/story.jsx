import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Alert",
};

const Template = (args) => <Component {...args} />;
export const Default = Template.bind();
Default.args = {
  visible: true,
  errorText: "text",
};