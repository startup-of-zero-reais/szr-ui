import {
	breakpoints,
	colors,
	font_sizes,
	font_weights,
	fonts,
	line_heights,
	rounded,
	shadows,
	spacing,
} from '@startup-of-zero-reais/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	media: {
		'sm': `(min-width: ${breakpoints.sm})`,
		'md': `(min-width: ${breakpoints.md})`,
		'lg': `(min-width: ${breakpoints.lg})`,
		'xl': `(min-width: ${breakpoints.xl})`,
		'2xl': `(min-width: ${breakpoints['2xl']})`,
	},

	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
		filter: 'shadows',
	},

	theme: {
		sizes: breakpoints,
		colors,
		fontSizes: font_sizes,
		fontWeights: font_weights,
		lineHeights: line_heights,
		fonts,
		radii: rounded,
		space: spacing,
		shadows,
	}
})
