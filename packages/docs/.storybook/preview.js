import { themes } from '@storybook/theming'
import bgs from '@storybook/addon-backgrounds'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
	docs: {
		theme: themes.dark
	},
	backgrounds: {
		default: 'dark',
		theme: themes.dark
	}
  },
};

export default preview;
