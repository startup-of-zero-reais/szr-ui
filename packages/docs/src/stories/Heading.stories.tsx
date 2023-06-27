import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@szr-ui/react'

export default {
	title: 'Typography/Heading',
	component: Heading,
	args: {
		children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum laboriosam possimus magni, aliquam sint necessitatibus hic iste alias minima ad harum tempora, optio rem ipsum. Perspiciatis, provident modi. Dolorem, ullam.'
	}
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const HeadingTag: StoryObj<HeadingProps> = {
	args: {
		children: 'H1 Heading',
		as: 'h1'
	},
}