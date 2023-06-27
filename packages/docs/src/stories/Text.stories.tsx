import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@szr-ui/react'

export default {
	title: 'Typography/Text',
	component: Text,
	args: {
		children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum laboriosam possimus magni, aliquam sint necessitatibus hic iste alias minima ad harum tempora, optio rem ipsum. Perspiciatis, provident modi. Dolorem, ullam.'
	}
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const StrongTag: StoryObj<TextProps> = {
	args: {
		children: 'Strong text',
		as: 'strong'
	}
}