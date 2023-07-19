/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',

      primary: {
        50: '#FAE0EC',
        100: '#F4B6D4',
        200: '#EE8BB8',
        300: '#EA5C9D',
        400: '#E73788',
        500: '#E60071',
        600: '#D4006B',
        700: '#BF0667',
        800: '#A80362',
        900: '#830758',
      },

      secondary: {
        400: '#F0F0F0',
        500: '#EBEBEB',
        600: '#C8C8C8',
      },

      surface: {
        50: '#FFFFFF',
        100: '#FBFBFE',
        200: '#F6F6F8',
        300: '#E7E7E9',
        400: '#C3C3C5',
        500: '#A5A5A7',
        600: '#7B7B7D',
        700: '#676769',
        800: '#48484A',
        900: '#000000',
      },

      success: {
        50: '#DFFFD7',
        100: '#C6F2B6',
        200: '#A4DF8F',
        300: '#84CE66',
        400: '#6DC34A',
        500: '#55B627',
        600: '#4BA81E',
        700: '#3C9411',
        800: '#2F8301',
        900: '#1A6600',
      },

      error: {
        50: '#FFBBBB',
        100: '#FFA4A4',
        200: '#FF8585',
        300: '#FF5D5D',
        400: '#FF2727',
        500: '#DE0000',
        600: '#BD0000',
        700: '#A00000',
        800: '#880000',
        900: '#740000',
      },

      warning: {
        50: '#FFF4E0',
        100: '#FFE2B4',
        200: '#FFCE82',
        300: '#FEB84D',
        400: '#FDA826',
        500: '#FF9A00',
        600: '#FF8F00',
        700: '#F67E00',
        800: '#EF6F00',
        900: '#E75403',
      },

      links: {
        300: '#007AFF',
        400: '#3B61F3',
        500: '#0045E6',
      },
    },
    boxShadow: {
      50: '0px 2px 7px rgba(0, 0, 0, 0.07)',
      70: '0px 2px 26px rgba(0, 0, 0, 0.07)',
      100: '0px 0px 4px rgba(232, 48, 158, 0.20)',
      150: '4px 9px 17px rgba(187, 62, 189, 0.0',
    },
    fontSize: {
      48: '48px',
      32: '32px',
      24: '24px',
      18: '18px',
      16: '16px',
      14: '14px',
      12: '12px',
    },
    fontWeight: {
      bold: 700,
      book: 450,
    },
    lineHeight: {
      150: '150%',
      140: '140%',
      130: '130%',
      120: '120%',
      100: '100%',
    },
  },
  plugins: [],
}
