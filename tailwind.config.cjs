/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      mcBg: '#161720',
      cardColor: '#212330',
      mt: '#898a91',
      mtLight: '#adaeb7',
      hlcolor: '#4d377a',
      bnav: '#13141c',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
