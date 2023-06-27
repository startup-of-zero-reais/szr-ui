import { styled } from '../../styles'

export const Container = styled('div', {
	backgroundColor: '$gray_900',
	padding: '$3 $4',
	borderRadius: '$md',
	boxSizing: 'border-box',
	border: '2px solid $gray_900',
	display: 'flex',
	alignItems: 'baseline',

	'&:has(input:focus)': {
		borderColor: '$slate_400'
	},

	'&:has(input:disabled)': {
		borderColor: '$neutral_600',
		opacity: 0.5,
		cursor: 'not-allowed'
	}
})

export const Prefix = styled('span', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: '$gray_500',
	fontWeight: '$normal'
})

export const Input = styled('input', {
	fontFamily: '$default',
	fontSize: '$sm',
	color: 'white',
	fontWeight: '$normal',
	background: 'transparent',
	border: 'none',
	width: '100%',

	'&:focus': {
		outline: 'none'
	},

	'&:disabled': {
		cursor: 'not-allowed'
	},

	'&:placeholder': {
		color: '$gray_400'
	}
})

Container.displayName = 'Container'
Prefix.displayName = 'Prefix'
Input.displayName = 'Input'