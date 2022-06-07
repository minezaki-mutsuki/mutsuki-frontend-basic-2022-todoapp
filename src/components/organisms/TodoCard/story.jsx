import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Organisms/TodoCard",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {};