import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskNameChange: (value) => console.log("taskname changed: ", value),
  onTaskComplete: () => console.log("task completed"),
  taskName: "taskname",
  defaultIsEditing: true,
};
