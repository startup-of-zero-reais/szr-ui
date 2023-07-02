import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Box, Grid, GridProps, Text } from '@startup-of-zero-reais/react'

export default {
	title: 'Surfaces/Grid',
	component: Grid,

	args: {
		noGutter: false,
		container: false,
		item: true,
		children: <Text>Testando o elemento grid</Text>,
		cols: undefined,
	},

	argTypes: {
		container: {
			control: 'boolean',
			description: 'Define se o Grid é um container, um container possui as colunas de acordo com os breakpoints'
		},
		children: {
			control: { type: null },
			description: 'Um text / componente React que será filho deste Grid'
		},
		item: {
			control: 'boolean',
			description: 'Define se o Grid é um item, quando um Grid é um item, possui apenas 1 coluna'
		},
		cols: {
			control: 'object',
			description: 'Define o número de colunas do Grid<br /><br />***@defaults***<br />Grid container: 12 columns<br />Grid item: 1 column'
		},
		noGutter: {
			control: 'boolean',
			description: 'Define se o Grid é um container, um container possui as colunas de acordo com os breakpoints'
		},
	}
} as Meta<GridProps>

export const Primary: StoryObj<GridProps> = {}

export const TwoCols: StoryObj<GridProps> = {
	args: {
		container: false,
		item: true,
		children: (
			<>
				<Text>Elemento Grid 1</Text>
				<Text>Elemento Grid 2</Text>
				<Text>Elemento Grid 3</Text>
				<Text>Elemento Grid 4</Text>
			</>
		),
		cols: {
			'@initial': 1,
			'@sm': 2
		}
	},
}

export const Responsive: StoryObj<GridProps> = {
	args: {
		container: false,
		item: true,
		children: (
			<>
				<Text>Elemento Grid 1</Text>
				<Text>Elemento Grid 2</Text>
				<Text>Elemento Grid 3</Text>
				<Text>Elemento Grid 4</Text>
			</>
		),
		cols: {
			'@initial': 1,
			'@sm': 2,
			'@md': 3,
			'@lg': 4
		}
	},
}

export const WithAnotherGrid: StoryObj<GridProps> = {
	args: {
		container: true,
		item: false,
		children: (
			<Grid item noGutter>
				<Text>Elemento Grid 1</Text>
				<Text>Elemento Grid 2</Text>
				<Text>Elemento Grid 3</Text>
				<Text>Elemento Grid 4</Text>
			</Grid>
		),
	},
}

export const WithBox: StoryObj<GridProps> = {
	args: {
		container: false,
		item: true,
		children: (
			<Box noGutter>
				<Text>Elemento Grid 1</Text>
				<Text>Elemento Grid 2</Text>
				<Text>Elemento Grid 3</Text>
				<Text>Elemento Grid 4</Text>
			</Box>
		),
	},
}
