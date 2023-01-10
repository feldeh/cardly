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
      colors: {
        lightGrey: '#9C9C9C',
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
    },
  },
  plugins: [],
};
