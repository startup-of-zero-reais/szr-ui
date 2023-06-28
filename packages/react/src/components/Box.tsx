import React from 'react'
import { ComponentProps } from '@stitches/react'
import { DataAttrWidth } from '../styles/width-variants'
import { styled } from '../styles'
import { As } from '../helpers/as'

const BoxComponent = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$neutral_800',
	boxShadow: '$drop_base',
	boxSizing: 'border-box',

	'&[data-min-width]': { minWidth: 'var(--min-box-width)' },
	'&[data-width]': { width: 'var(--box-width)' },
	'&[data-max-width]': { maxWidth: 'var(--max-box-width)' },

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

export type BoxProps = ComponentProps<typeof BoxComponent> & As & DataAttrWidth

function Box(props: BoxProps) {
	const {
		css = {},
		'data-min-width': minWidth,
		'data-width': width,
		'data-max-width': maxWidth,
		...rest
	} = props

	return (
		<BoxComponent
			data-min-width={minWidth}
			data-width={width}
			data-max-width={maxWidth}
			css={{
				'--min-box-width': minWidth,
				'--box-width': width,
				'--max-box-width': maxWidth,
				...css
			}}
			{...rest}
		/>
	)
}

Box.displayName = 'Box'
export { Box }
