import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@szr-ui/react'

export default {
	title: 'Form/Text Input',
	component: TextInput,

	args: {  }
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
	args: { placeholder: 'username' }
}

export const Disabled: StoryObj<TextInputProps> = {
	args: { disabled: true, placeholder: 'desabilitado' }
}

export const Prefixed: StoryObj<TextInputProps> = {
	args: { prefix: 'https://github.com/', placeholder: 'username' }
}
