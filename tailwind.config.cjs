/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      mcBg: '#0c0d12',
      cardColor: '#212330',
      mt: '#898a91',
      mtLight: '#adaeb7',
      hlcolor: '#4d377a',
      bnav: '#0e0f15',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
