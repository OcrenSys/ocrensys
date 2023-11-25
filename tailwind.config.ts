import type { Config } from 'tailwindcss';
import { ConfigThemes, ThemeColors, nextui } from '@nextui-org/react';

const DarkColors: Partial<ThemeColors> | undefined = {
  background: '#042616',
  foreground: '#ffffff',
  focus: '#11D97C',

  primary: {
    '50': '#edf1ff',
    '100': '#dee4ff',
    '200': '#c4cdff',
    '300': '#a0acff',
    '400': '#7b80fe',
    '500': '#615cf8',
    '600': '#513eed',
    '700': '#4530d2',
    '800': '#392aa9',
    '900': '#322a85',
    DEFAULT: '#075933',
    foreground: '#ffffff',
  },
};

const TealDarkTheme: ConfigThemes = {
  'teal-dark': {
    extend: 'dark',
    colors: { ...DarkColors },
    layout: {
      disabledOpacity: '0.3',
      radius: {
        small: '8px',
        medium: '16px',
        large: '32px',
      },
      borderWidth: {
        small: '1px',
        medium: '3px',
        large: '5px',
      },
    },
  },
};

const LightColors: Partial<ThemeColors> | undefined = {};

const TealLightTheme: ConfigThemes = {
  'teal-light': {},
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'teal-dark': {
          extend: 'dark',
          colors: { ...DarkColors },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '8px',
              medium: '16px',
              large: '32px',
            },
            borderWidth: {
              small: '1px',
              medium: '3px',
              large: '5px',
            },
          },
        },
      },
    }),
  ],
};
export default config;

/* Color Theme Swatches in Hex */
// .UI/UX-1-hex { color: #052DA6; }
// .UI/UX-2-hex { color: #11D97C; }
// .UI/UX-3-hex { color: #0DA65F; }
// .UI/UX-4-hex { color: #075933; }
// .UI/UX-5-hex { color: #042616; }

// /* Color Theme Swatches in RGBA */
// .UI/UX-1-rgba { color: rgba(4, 45, 165, 1); }
// .UI/UX-2-rgba { color: rgba(17, 216, 123, 1); }
// .UI/UX-3-rgba { color: rgba(13, 165, 94, 1); }
// .UI/UX-4-rgba { color: rgba(7, 89, 50, 1); }
// .UI/UX-5-rgba { color: rgba(4, 38, 22, 1); }

// /* Color Theme Swatches in HSLA */
// .UI/UX-1-hsla { color: hsla(225, 94, 33, 1); }
// .UI/UX-2-hsla { color: hsla(151, 85, 45, 1); }
// .UI/UX-3-hsla { color: hsla(151, 85, 35, 1); }
// .UI/UX-4-hsla { color: hsla(151, 85, 18, 1); }
// .UI/UX-5-hsla { color: hsla(151, 80, 8, 1); }
