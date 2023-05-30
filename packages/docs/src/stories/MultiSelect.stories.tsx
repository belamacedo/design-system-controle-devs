import type { StoryObj, Meta } from '@storybook/react';

import { MultiSelect, MultiSelectProps } from '@controle-devs-ui/react';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
} as Meta<MultiSelectProps>;

const skills = [
  { value: '1', label: 'React Js' },
  { value: '2', label: 'React Native' },
  { value: '3', label: 'Angular' },
  { value: '4', label: 'C#' },
];

export const Primary: StoryObj<MultiSelectProps> = {
  args: {
    select: {
      options: skills,
      placeholder: 'Selecione as opções',
      closeMenuOnSelect: false,
      hideSelectedOptions: false,
    },
    setState: () => console.log('itens selecionados'),
  },
};
