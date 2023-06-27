import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { As } from '../helpers/as'

export const Button = styled('button', {
	all: 'unset',
	borderRadius: '$md',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	minWidth: 120,
	boxSizing: 'border-box',
	color: 'white',
	transition: 'all 150ms',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '$2',

	svg: {
		width: '$4',
		height: '$4',
	},

	'&:disabled': {
		backgroundColor: '$neutral_600',
		borderColor: '$neutral_600',
		color: '$neutral_400',
		cursor: 'not-allowed',
	},

	variants: {
		variant: {
			slate: {
				backgroundColor: '$slate_500',
				border: '2px solid $slate_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$slate_400',
					borderColor: '$slate_400',
				}
			},
			gray: {
				backgroundColor: '$gray_500',
				border: '2px solid $gray_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$gray_400',
					borderColor: '$gray_400',
				}
			},
			zinc: {
				backgroundColor: '$zinc_500',
				border: '2px solid $zinc_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$zinc_400',
					borderColor: '$zinc_400',
				}
			},
			neutral: {
				backgroundColor: '$neutral_500',
				border: '2px solid $neutral_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$neutral_400',
					borderColor: '$neutral_400',
				}
			},
			stone: {
				backgroundColor: '$stone_500',
				border: '2px solid $stone_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$stone_400',
					borderColor: '$stone_400',
				}
			},
			red: {
				backgroundColor: '$red_500',
				border: '2px solid $red_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$red_500',
					borderColor: '$red_500',
				}
			},
			orange: {
				backgroundColor: '$orange_500',
				border: '2px solid $orange_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$orange_400',
					borderColor: '$orange_400',
				}
			},
			amber: {
				backgroundColor: '$amber_500',
				border: '2px solid $amber_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$amber_400',
					borderColor: '$amber_400',
				}
			},
			yellow: {
				backgroundColor: '$yellow_500',
				border: '2px solid $yellow_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$yellow_400',
					borderColor: '$yellow_400',
				}
			},
			lime: {
				backgroundColor: '$lime_500',
				border: '2px solid $lime_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$lime_400',
					borderColor: '$lime_400',
				}
			},
			green: {
				backgroundColor: '$green_600',
				border: '2px solid $green_600',
				'&:not(:disabled):hover': {
					backgroundColor: '$green_400',
					borderColor: '$green_400',
				}
			},
			emerald: {
				backgroundColor: '$emerald_500',
				border: '2px solid $emerald_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$emerald_400',
					borderColor: '$emerald_400',
				}
			},
			teal: {
				backgroundColor: '$teal_500',
				border: '2px solid $teal_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$teal_400',
					borderColor: '$teal_400',
				}
			},
			cyan: {
				backgroundColor: '$cyan_500',
				border: '2px solid $cyan_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$cyan_400',
					borderColor: '$cyan_400',
				}
			},
			sky: {
				backgroundColor: '$sky_500',
				border: '2px solid $sky_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$sky_400',
					borderColor: '$sky_400',
				}
			},
			blue: {
				backgroundColor: '$blue_500',
				border: '2px solid $blue_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$blue_400',
					borderColor: '$blue_400',
				}
			},
			indigo: {
				backgroundColor: '$indigo_500',
				border: '2px solid $indigo_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$indigo_400',
					borderColor: '$indigo_400',
				}
			},
			violet: {
				backgroundColor: '$violet_500',
				border: '2px solid $violet_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$violet_400',
					borderColor: '$violet_400',
				}
			},
			purple: {
				backgroundColor: '$purple_500',
				border: '2px solid $purple_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$purple_400',
					borderColor: '$purple_400',
				}
			},
			fuchsia: {
				backgroundColor: '$fuchsia_500',
				border: '2px solid $fuchsia_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$fuchsia_400',
					borderColor: '$fuchsia_400',
				}
			},
			pink: {
				backgroundColor: '$pink_500',
				border: '2px solid $pink_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$pink_400',
					borderColor: '$pink_400',
				}
			},
			rose: {
				backgroundColor: '$rose_500',
				border: '2px solid $rose_500',
				'&:not(:disabled):hover': {
					backgroundColor: '$rose_400',
					borderColor: '$rose_400',
				}
			},
		},

		outlined: {
			true: {
				backgroundColor: 'transparent !important',
				'&:not(:disabled):hover': {
					backgroundColor: 'transparent',
				},
			}
		},

		size: {
			sm: {
				padding: '0 $2',
				height: '$8'
			},
			md: {
				padding: '0 $4',
				height: '$11'
			},
			lg: {
				padding: '0 $6',
				height: '$14',
				fontSize: '$md',
			},
		}
	},

	compoundVariants: [
		{ variant: 'slate', outlined: true, css: { color: '$slate_400'} },
		{ variant: 'gray', outlined: true, css: { color: '$gray_400'} },
		{ variant: 'zinc', outlined: true, css: { color: '$zinc_400'} },
		{ variant: 'neutral', outlined: true, css: { color: '$neutral_400'} },
		{ variant: 'stone', outlined: true, css: { color: '$stone_400'} },
		{ variant: 'red', outlined: true, css: { color: '$red_400'} },
		{ variant: 'orange', outlined: true, css: { color: '$orange_500'} },
		{ variant: 'amber', outlined: true, css: { color: '$amber_500'} },
		{ variant: 'yellow', outlined: true, css: { color: '$yellow_500'} },
		{ variant: 'lime', outlined: true, css: { color: '$lime_500'} },
		{ variant: 'green', outlined: true, css: { color: '$green_500'} },
		{ variant: 'emerald', outlined: true, css: { color: '$emerald_500'} },
		{ variant: 'teal', outlined: true, css: { color: '$teal_500'} },
		{ variant: 'cyan', outlined: true, css: { color: '$cyan_500'} },
		{ variant: 'sky', outlined: true, css: { color: '$sky_500'} },
		{ variant: 'blue', outlined: true, css: { color: '$blue_500'} },
		{ variant: 'indigo', outlined: true, css: { color: '$indigo_500'} },
		{ variant: 'violet', outlined: true, css: { color: '$violet_500'} },
		{ variant: 'purple', outlined: true, css: { color: '$purple_500'} },
		{ variant: 'fuchsia', outlined: true, css: { color: '$fuchsia_500'} },
		{ variant: 'pink', outlined: true, css: { color: '$pink_500'} },
		{ variant: 'rose', outlined: true, css: { color: '$rose_500'} },
	],

	defaultVariants: {
		variant: 'slate',
		size: 'md'
	}
})

export type ButtonProps = ComponentProps<typeof Button> & As

Button.displayName = 'Button'