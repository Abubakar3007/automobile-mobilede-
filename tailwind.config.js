module.exports = {
  content: [
    './*.html', // scans ALL HTML files in the root folder
  ],

  safelist: [
    {
      pattern: /^[a-z\d-]+\[.*?\]$/, // supports all arbitrary classes
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
      backgroundImage: {
        'footer-bg': 'linear-gradient(to right, #0A2540, #193B6A, #2C5282)',
        'black-purple': 'linear-gradient(to right, #000000, #512B81)',
        'black-popup': 'linear-gradient(#00000052, #00000000);'
      }
    },
  },
  plugins: [],
}