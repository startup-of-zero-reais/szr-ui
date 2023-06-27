import React from 'react'
import { Container, Label, Steps, Step } from './styles'

export interface StepperProps {
	size: number;
	currentStep?: number;
}

export function Stepper({ size = 1, currentStep = 1 }: StepperProps) {
	return (
		<Container>
			<Label>Passo {currentStep} de {size}</Label>

			<Steps css={{ '--steps-size': size }}>
				{Array
					.from({ length: size }, (_, i) => i+1)
					.map((step) => <Step key={step} active={step <= currentStep} />)}
			</Steps>
		</Container>
	)
}