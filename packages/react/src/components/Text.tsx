import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Text = styled('p', {
	fontFamily: '$default',
	lineHeight: '$normal',
	margin: 0,
	color: '$gray_100',

	variants: {
		size: {
			'xs': { fontSize: '$xs' },
			'sm': { fontSize: '$sm' },
			'md': { fontSize: '$md' },
			'lg': { fontSize: '$lg' },
			'xl': { fontSize: '$xl' },
			'2xl': { fontSize: '$2xl' },
			'3xl': { fontSize: '$3xl' },
			'4xl': { fontSize: '$4xl' },
			'5xl': { fontSize: '$5xl' },
			'6xl': { fontSize: '$6xl' },
			'7xl': { fontSize: '$7xl' },
			'8xl': { fontSize: '$8xl' },
			'9xl': { fontSize: '$9xl' },
		}
	},
})

export type TextProps = ComponentProps<typeof Text> & As

Text.displayName = 'Text'