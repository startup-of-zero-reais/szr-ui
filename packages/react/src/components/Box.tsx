import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Box = styled('div', {
	padding: '$4',
	borderRadius: '$md',
	backgroundColor: '$gray_800',
	border: '1px solid $gray_600'
})

export type BoxProps = ComponentProps<typeof Box> & As

Box.displayName = 'Box'