import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Box = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$neutral_800',
	boxShadow: '$drop_base',
	boxSizing: 'border-box',

	variants: {
		shadow: {
			none: { boxShadow: 'none' },
			sm: { boxShadow: '$drop_sm' },
			md: { boxShadow: '$drop_md' },
			base: { boxShadow: '$drop_base' },
			lg: { boxShadow: '$drop_lg' },
			xl: { boxShadow: '$drop_xl' },
			'2xl': { boxShadow: '$drop_2xl' },
		},

		noGutter: { true: { padding: '0' } },

		transparent: {
			true: { backgroundColor: 'transparent' }
		},
	},

	defaultVariants: {
		transparent: false,
		noGutter: false,
		shadow: 'none',
	},
})

export type BoxProps = ComponentProps<typeof Box> & As

Box.displayName = 'Box'
