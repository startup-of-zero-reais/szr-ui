import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Stepper, StepperProps } from '@startup-of-zero-reais/react'

export default {
	title: 'Form/Stepper',
	component: Stepper,

	args: {
		size: 4,
		currentStep: 1
	}
} as Meta<StepperProps>

export const Primary: StoryObj<StepperProps> = {}

export const Full: StoryObj<StepperProps> = {
	args: {
		size: 4,
		currentStep: 4
	}
}
