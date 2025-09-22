module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],

  safelist: [
    {
      pattern: /^[a-z\d-]+\[.*?\]$/,
    },
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      screens: {
        mid: '900px',
        desk: '1440px',
        sxl: '1200px',
        sxs: '400px',
        xmd: '800px',
        xsm: '680px',
      },
      colors: {
        beige: '#D7B67C',
        brown: '#815E12',
        gold: '#F0D000',
        green: '#84BA1F',
        red: '#F53D3A',
        blue: '#436FDE',
        yellow:'#F1D200',
        gray:'#ABABAB',
        orange:'#F67E07',
        violet:'#9262FF',
        metallic:'#1E1F24',
        silver:'#F3F3F3',
      },

    },
  },
  plugins: [],
}