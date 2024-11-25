import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A',
        foreground: '#808080',
        headerbackground: '#0D0D0D',
        header1: '#4EA8DE',
        header2: '#5E60CE',
        button: '#1E6F9F',
        highlight: '#F2F2F2',
        inputbkg: '#262626',
        inputborder: '#333333',
        placeholder: '#F2F2F266',
        counter: '#333333',
        spacer: '#333333',
        text: '#D9D9D9',
        task: {
          red: '#F75A68',
          orange: '#F1A33C',
          yellow: '#F4E063',
          green: '#4CAF50',
          blue: '#2196F3',
          indigo: '#3F51B5',
          purple: '#9C27B0',
          pink: '#E91E63',
          brown: '#8D6E63',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        '3xl': '2.5rem',
      },
      fontWeight: {
        400: '400',
        700: '700',
        900: '900',
      }
    },
  },
  plugins: [],
} satisfies Config;
