import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@startup-of-zero-reais/react'

export default {
	title: 'Surfaces/Box',
	component: Box,

	args: {
		children: <Text>Testando o elemento Box</Text>
	},
	argTypes: {
		children: { control: { type: null } }
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}