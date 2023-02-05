/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        smartphone: '391px',
        largeScreen: '1190px',
        macbook: '1440px',
      },
      colors: {
        darkGrey: '#1F1F1F',
        lightGrey: '#9C9C9C',
        whiteGrey: '#F3F3F3',
        blackTitle: '#121212',
      },

      fontSize: {
        sm: '12px',
        base: '15px',
        subTitle: '20px',
        xl: '25px',
        title: '30px',
      },

      fontFamily: {
        ABeeZeeItalic: 'ABeeZee italic',
      },

      boxShadow: {
        btnShadow: '2px 4px 10px 2px red',
      },

      animation: {
        'rotation-slow': 'rotation 5s linear infinite',
      },
    },
  },
  plugins: [],
};
