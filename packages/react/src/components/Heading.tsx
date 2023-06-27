import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Heading = styled('h2', {
	fontFamily: '$default',
	lineHeight: '$normal',
	margin: 0,
	color: '$gray_100',

	variants: {
		size: {
			'xs': { fontSize: '$lg' },
			'sm': { fontSize: '$xl' },
			'md': { fontSize: '$2xl' },
			'lg': { fontSize: '$4xl' },
			'xl': { fontSize: '$5xl' },
			'2xl': { fontSize: '$6xl' },
			'3xl': { fontSize: '$7xl' },
			'4xl': { fontSize: '$8xl' },
			'5xl': { fontSize: '$9xl' },
		}
	},

	defaultVariants: {
		size: 'md'
	}
})

export type HeadingProps = ComponentProps<typeof Heading> & As

Heading.displayName = 'Heading'