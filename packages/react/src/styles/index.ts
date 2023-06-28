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
