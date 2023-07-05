import { RxInfoCircled } from 'react-icons/rx';
import type { Meta, StoryObj } from '@storybook/react';

import { ListWrapper } from 'xy-ui';

const meta = {
  title: 'Example/ListWrapper',
  component: ListWrapper,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ListWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Select with placeholder',
  args: {
    icon: RxInfoCircled,
    title: 'List title',
    description: 'Some description',
    children: (
      <ul>
        <li>
          list item description text lorem ipsum list item description text
          lorem ipsum
        </li>
        <li>
          list item description text lorem ipsum list item description text
        </li>
        <li>
          list item description text lorem ipsum list item description text
          lorem
        </li>
        <li>
          list item description text lorem ipsum list item description text
          lorem ipsum
        </li>
      </ul>
    ),
  },
};