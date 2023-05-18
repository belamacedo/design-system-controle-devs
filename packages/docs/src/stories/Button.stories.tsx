import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@controle-devs-ui/react";
export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    text: "Button",
  },
};
