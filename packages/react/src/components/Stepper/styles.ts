import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled('div', {})

export const Label = styled(Text, {
	color: '$gray_300',

	defaultVariants: {
		size: 'sm'
	}
})

export const Steps = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
	gap: '$2',
	marginTop: '$1'
})

export const Step = styled('div', {
	height: '$1',
	borderRadius: '$sm',
	backgroundColor: '$gray_700',
	transition: 'background-color 150ms ease-in-out',

	variants: {
		active: {
			true: { backgroundColor: '$gray_200' }
		}
	}
})

Container.displayName = 'Container'
Label.displayName = 'Label'
Steps.displayName = 'Steps'
Step.displayName = 'Step'