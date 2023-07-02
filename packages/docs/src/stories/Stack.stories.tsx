import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Stack, StackProps, Text } from '@startup-of-zero-reais/react'

export default {
	title: 'Surfaces/Stack',
	component: Stack,

	args: {
		children: (
			<>
				<Text>Testando o elemento Stack</Text>
				<Text>Testando o elemento Stack</Text>
			</>
		),
		noGutter: false,
		dir: 'vertical',
		justify: 'initial',
		align: 'initial',
		wrap: false,
		noGrow: false,
		noShrink: false,
		css: undefined,
	},

	argTypes: {
		children: {
			control: { type: null },
			description: 'Um text / componente React que será filho deste Stack'
		},
		noGutter: {
			control: 'boolean',
			description: 'Define se a `Stack` terá seus espaçamentos suprimidos'
		},
		dir: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
			description: 'Define a direção da pilha'
		},
		justify: {
			control: 'inline-radio',
			options: ['initial', 'start', 'center', 'between', 'evenly', 'around', 'end'],
			description: 'Define o alinhamento para o conteúdo da `Stack`'
		},
		align: {
			control: 'inline-radio',
			options: ['initial', 'start', 'center', 'baseline', 'end'],
			description: 'Define o alinhamento dos itens da `Stack`'
		},
		wrap: {
			control: 'boolean',
			description: 'Define se o container flexível vai quebrar linha para itens maiores'
		},
		noGrow: {
			control: 'boolean',
			description: 'Define se o container flexível pode esticar seu tamanho'
		},
		noShrink: {
			control: 'boolean',
			description: 'Define se o container flexível pode diminuir seu tamanho'
		},
		css: {
			control: { type: null },
			description: 'Definições personalizadas de css'
		}
	}
} as Meta<StackProps>

export const Primary: StoryObj<StackProps> = {}

export const FullCenter: StoryObj<StackProps> = {
	args: {
		align: 'center',
		justify: 'center',
		css: { minHeight: '180px' }
	},
}

export const Wrap: StoryObj<StackProps> = {
	args: {
		wrap: true,
		dir: 'horizontal',

		children: (
			<>
				<Stack
					noGutter
					noShrink
					css={{ flexBasis: '18rem', border: '2px solid $rose_400' }}
				>
					<Text>Testando o elemento Stack 1</Text>
					<Text>Testando o elemento Stack 2</Text>
				</Stack>

				<Stack
					noGutter
					noShrink
					// noGrow
					css={{ flexBasis: '15rem', border: '2px solid $violet_400' }}
				>
					<Text>Testando o elemento Stack 3</Text>
					<Text>Testando o elemento Stack 4</Text>
				</Stack>
			</>
		)
	},
}
