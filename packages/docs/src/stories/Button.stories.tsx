import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@szr-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
	title: 'Form/Button',
	component: Button,

	args: {
		children: 'Enviar',
		disabled: false,
		outlined: false,
		size: 'md',
	},
	argTypes: {
		variant: {
			options: ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose' ],
			control: 'select'
		},
		outlined: { control: 'boolean' },
		disabled: { control: 'boolean' },
		size: {
			options: ['sm', 'md', 'lg'],
			control: 'inline-radio'
		},
		onClick: { action: 'click' },
	}
} as Meta<ButtonProps>

export const Example: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		variant: 'green',
		size: 'md',
		children: (
			<>
				Próximo passo
				<ArrowRight />
			</>
		)
	},
	argTypes: { children: { control: { type: null } } }
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
		children: 'Desabilitado'
	}
}