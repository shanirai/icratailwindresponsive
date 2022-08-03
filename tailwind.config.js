module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            regular: ['NanumSquare_R', 'sans-serif'],
            light: ['NanumSquare_L', 'sans-serif'],
            // medium: ['Open Sans M', 'sans-serif'],
            // sbold: ['Open Sans SB', 'sans-serif'],
            bold: ['NanumSquare', 'sans-serif'],
            ebold: ['NanumSquareEB', 'sans-serif'],
            // regular: ['Open Sans R', 'sans-serif'],
            // light: ['Open Sans L', 'sans-serif'],
            // medium: ['Open Sans M', 'sans-serif'],
            // sbold: ['Open Sans SB', 'sans-serif'],
            // bold: ['Open Sans B', 'sans-serif'],
            // ebold: ['Open Sans EB', 'sans-serif'],
        },
        keyframes: {
          bounce: {
            '0%, 100%': {
              transform: 'translateY(-3%)',
            },
          }
        }
    },
},
  plugins: [],
};
