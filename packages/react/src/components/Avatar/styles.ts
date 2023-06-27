import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const Container = styled(Avatar.Root, {
	borderRadius: '$full',
	display: 'inline-block',
	overflow: 'hidden',
	
	variants: {
		size: {
			sm: { width: '$8', height: '$8' },
			md: { width: '$12', height: '$12' },
			lg: { width: '$16', height: '$16' }
		}
	},

	defaultVariants: {
		size: 'md'
	}
})

export const Image = styled(Avatar.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit'
})

export const Fallback = styled(Avatar.Fallback, {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '$gray_800',
	color: 'white',

	svg: {
		width: '$6',
		height: '$6',
	}
})

Container.displayName = 'Container'
Image.displayName = 'Image'
Fallback.displayName = 'Fallback'