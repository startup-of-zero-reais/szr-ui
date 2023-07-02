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
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
