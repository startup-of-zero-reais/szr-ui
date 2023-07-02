import { ComponentProps } from '@stitches/react'
import { Box } from './Box'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Stack = styled(Box, {
	display: 'flex',
	flexDirection: 'column',
	flexBasis: 'auto',
	flex: 1,

	gap: '$2',
	'@md': { gap: '$4' },
	'@lg': { gap: '$5' },
	'@xl': { gap: '$6' },

	variants: {
		dir: {
			horizontal: { flexDirection: 'row' },
			vertical: { flexDirection: 'column' },
		},

		align: {
			initial: { alignItems: 'initial' },
			start: { alignItems: 'flex-start' },
			center: { alignItems: 'center' },
			baseline: { alignItems: 'baseline' },
			end: { alignItems: 'flex-end' },
		},

		justify: {
			initial: { justifyContent: 'initial' },
			start: { justifyContent: 'flex-start' },
			center: { justifyContent: 'center' },
			between: { justifyContent: 'space-between' },
			evenly: { justifyContent: 'space-evenly' },
			around: { justifyContent: 'space-around' },
			end: { justifyContent: 'flex-end' },
		},

		wrap: { true: { flexWrap: 'wrap' } },
		noGrow: { true: { flexGrow: 0 } },
		noShrink: { true: { flexShrink: 0 } },
	},

	compoundVariants: [
		{
			// @ts-ignore
			noGutter: true,
			css: { gap: '$0' }
		},
	],

	defaultVariants: {
		dir: 'vertical',
		align: 'initial',
		justify: 'initial',
		wrap: false,
		noGrow: false,
		noShrink: false,
	},
})

export interface StackProps extends ComponentProps<typeof Stack>, As {}

Stack.displayName = 'Stack'
