import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '@startup-of-zero-reais/react'

export default {
	title: 'Form/Text Area',
	component: TextArea,

	args: {  }
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
	args: { placeholder: 'username' }
}

export const Disabled: StoryObj<TextAreaProps> = {
	args: { disabled: true, placeholder: 'desabilitado' }
}
