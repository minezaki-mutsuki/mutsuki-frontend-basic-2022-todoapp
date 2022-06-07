import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Atoms/Input",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onEditComplete: (value) => console.log("edit completed: ", value),
};
Default.decorators = [
  (Story) => (
    <div style={{ width: "232px" }}>
      <Story />
    </div>
  ),
];