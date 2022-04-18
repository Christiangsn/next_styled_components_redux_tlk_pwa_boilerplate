import { Story } from '@storybook/react'
import { Example } from '..'
import { ExampleProps } from '../types'

const Template: Story<ExampleProps> = args => (
  <Example {...args}>
    <h1>Render Children</h1>
  </Example>
)

export const Default = Template.bind({})
