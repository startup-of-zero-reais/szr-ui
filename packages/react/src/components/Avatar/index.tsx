import React from 'react'
import { User } from 'phosphor-react'
import { Container, Fallback, Image } from './styles'
import { ComponentProps } from '@stitches/react'
import { AvatarImage } from '@radix-ui/react-avatar'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export function Avatar(props: AvatarProps) {
	return (
		<Container>
			<Image {...props} />

			<Fallback delayMs={600}>
				<User />				
			</Fallback>
		</Container>
	)
}
