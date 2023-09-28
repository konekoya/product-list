import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {},
    colors: {
      yellow: '#f9d03f',
      'gray-light': '#fcf9f2',
      gray: '#696969',
      'gray-dark': '#121111',
      black: '#171716',
      'dark-black': '#1f1f1f',
    },
    extend: {
      screens: {
        xs: '375px',
      },
    },
  },
};
export default config;
