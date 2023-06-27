import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@startup-of-zero-reais/react'

export default {
	title: 'Data view/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/jeanmolossi.png',
		alt: 'Avatar image',
	},
	argTypes: {
		src: { control: { type: 'text' } }
	}
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
		alt: 'Avatar fallback'
	}
}