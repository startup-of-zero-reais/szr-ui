import * as Checkbox from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../styles'

export const Container = styled(Checkbox.Root, {
	all: 'unset',
	width: '$6',
	height: '$6',
	backgroundColor: '$gray_900',
	borderRadius: '$sm',
	lineHeight: 0,
	overflow: 'hidden',
	boxSizing: 'border-box',
	display: 'grid',
	placeContent: 'center',
	border: '2px solid $gray_900',
	transition: 'all 150ms',

	'&[data-state="checked"]': {
		backgroundColor: '$slate_500',
		border: '2px solid $slate_500'
	},

	'&:focus': {
		border: '2px solid $slate_500'
	}
})

const slideIn = keyframes({
	from: { transform: 'translateY(100%)' },
	to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
	to: { transform: 'translateY(100%)' },
	from: { transform: 'translateY(0)' },
})

export const Indicator = styled(Checkbox.Indicator, {
	color: 'white',
	width: '$4',
	height: '$4',

	'&[data-state="checked"]': {
		animation: `${slideIn} 150ms ease-out`
	},
	
	'&[data-state="unchecked"]': {
		animation: `${slideOut} 150ms ease-out`
	},
})

Container.displayName = 'Container'
Indicator.displayName = 'Indicator'