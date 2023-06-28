import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@startup-of-zero-reais/react'

export default {
	title: 'Surfaces/Box',
	component: Box,

	args: {
		children: <Text>Testando o elemento Box</Text>,
		transparent: false,
		noGutter: false,
		shadow: 'none',
	},

	argTypes: {
		children: {
			control: { type: null },
			description: 'Um texto / componente React que você pretende encapsular pelo Box'
		},
		transparent: {
			control: 'boolean',
			description: 'transparent `true` remove o fundo do box',
		},
		noGutter: {
			control: 'boolean',
			description: 'noGutter `true` remove o preenchimento extra do Box',
		},
		shadow: {
			control: 'inline-radio',
			options: ['none', 'sm', 'md', 'base', 'lg', 'xl', '2xl'],
			description: 'shadow é uma opção para adicionar sombra ao box',
		},
		'data-min-width': {
			control: 'text',
			description: '`data-min-width` define um valor limite para a propriedade. Pode ser em `px`, `%` ou `rem`'
		},
		'data-width': {
			control: 'text',
			description: '`data-width` define um valor limite para a propriedade. Pode ser em `px`, `%` ou `rem`'
		},
		'data-max-width': {
			control: 'text',
			description: '`data-max-width` define um valor limite para a propriedade. Pode ser em `px`, `%` ou `rem`'
		},
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
