import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { RotatingBorder } from "../lib/RotatingBorder/RotatingBorder";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/RotatingBorder",
  component: RotatingBorder,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    onClick: { action: "clicked" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), size: "medium" },
} satisfies Meta<typeof RotatingBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    children: "rotating border",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "rotating border",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "rotating border",
    size: "large",
  },
};
