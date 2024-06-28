import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      colors: {
        red: {
          200: '#FECACA',
        },
        orange: {
          200: '#FED7AA',
        },
        yellow: {
          200: '#FEF08A',
        },
        green: {
          200: '#BBF7D0',
        },
        teal: {
          200: '#99F6E4',
        },
        blue: {
          200: '#BFDBFE',
        },
        indigo: {
          200: '#C7D2FE',
        },
        purple: {
          200: '#E9D5FF',
        },
        pink: {
          200: '#FBCFE8',
        },
        rose: {
          200: '#FECDD3',
        },
        gray: {
          200: '#E5E7EB',
        },
      },
    },
    plugins: [],
  },
};
export default config;
