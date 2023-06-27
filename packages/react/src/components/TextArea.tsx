import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
	backgroundColor: '$gray_900',
	padding: '$3 $4',
	borderRadius: '$md',
	boxSizing: 'border-box',
	border: '2px solid $gray_900',
	
	fontFamily: '$default',
	fontSize: '$sm',
	color: 'white',
	fontWeight: '$normal',
	resize: 'vertical',
	minHeight: 80,
	
	display: 'flex',
	alignItems: 'baseline',

	'&:focus': {
		outline: 0,
		borderColor: '$slate_400'
	},

	'&:disabled': {
		borderColor: '$neutral_600',
		opacity: 0.5,
		cursor: 'not-allowed'
	}
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'