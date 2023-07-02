import { ComponentProps } from '@stitches/react'
import { Box } from './Box'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Grid = styled(Box, {
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '$1',

	'@md': { gap: '$2' },
	'@lg': { gap: '$4' },
	'@xl': { gap: '$5' },
	'@2xl': { gap: '$6' },

	variants: {
		item: {
			true: {
				gridColumn: 'span 12',
				'@sm': { gridColumn: 'span 2' },
				'@md': { gridColumn: 'span 4' },
				'@lg': { gridColumn: 'span 6' },
				'@xl': { gridColumn: 'span 12' },
				'@2xl': { gridColumn: 'span 12' },
			},
		},

		container: {
			true: {
				'@sm': { gridTemplateColumns: 'repeat(2, 1fr)' },
				'@md': { gridTemplateColumns: 'repeat(4, 1fr)' },
				'@lg': { gridTemplateColumns: 'repeat(6, 1fr)' },
				'@xl': { gridTemplateColumns: 'repeat(12, 1fr)' },
				'@2xl': { gridTemplateColumns: 'repeat(12, 1fr)' },
			}
		},

		cols: {
			1: { gridTemplateColumns: '1fr' },
			2: { gridTemplateColumns: 'repeat(2, 1fr)' },
			3: { gridTemplateColumns: 'repeat(3, 1fr)' },
			4: { gridTemplateColumns: 'repeat(4, 1fr)' },
			5: { gridTemplateColumns: 'repeat(5, 1fr)' },
			6: { gridTemplateColumns: 'repeat(6, 1fr)' },
			7: { gridTemplateColumns: 'repeat(7, 1fr)' },
			8: { gridTemplateColumns: 'repeat(8, 1fr)' },
			9: { gridTemplateColumns: 'repeat(9, 1fr)' },
			10: { gridTemplateColumns: 'repeat(10, 1fr)' },
			11: { gridTemplateColumns: 'repeat(11, 1fr)' },
			12: { gridTemplateColumns: 'repeat(12, 1fr)' },
		},
	},

	compoundVariants: [
		{
			item: true,
			container: false,
			cols: undefined,
			css: { gridTemplateColumns: '1fr' }
		},
		{
			// @ts-ignore
			noGutter: true,
			css: { gap: '$0' },
		}
	],

	defaultVariants: {
		item: false,
		container: false,
	}
})

export interface GridProps extends ComponentProps<typeof Grid>, As {}

Grid.displayName = 'Grid'
