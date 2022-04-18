import { Story } from '@storybook/react'
import { Default as TemplateDefault } from '..'
import { DefaultProps } from '../types'

const Template: Story<DefaultProps> = args => (
  <TemplateDefault {...args}>
    <h1>Render Children</h1>
  </TemplateDefault>
)

export const Default = Template.bind({})
