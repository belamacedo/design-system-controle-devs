import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";
export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    text: "teste",
  },
};
