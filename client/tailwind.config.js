module.exports = {
   mode: 'jit',
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            varela: ['Varela Round', 'sans-serif'],
            raleway: ['Raleway', 'sans-serif'],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
