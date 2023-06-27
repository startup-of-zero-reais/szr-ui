import React from 'react'
import { Container, Prefix, Input } from './styles'
import { ComponentProps } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
	prefix?: string;
}

export function TextInput ({
	prefix,
	...props
}: TextInputProps) {
	return (
		<Container>
			{!!prefix && <Prefix>{prefix}</Prefix>}
			<Input {...props} />
		</Container>
	)
}