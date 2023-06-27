import React from 'react'
import { Container, Indicator } from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from '@stitches/react'

export type CheckboxProps = ComponentProps<typeof Container>

export function Checkbox(props: CheckboxProps) {
	return (
		<Container {...props}>
			<Indicator asChild>
				<Check weight='bold' />
			</Indicator>
		</Container>
	)
}