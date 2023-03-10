/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
    colors: {
      mcBg: '#13141c',
      cardColor: '#212330',
      mt: '#898a91',
      mtLight: '#adaeb7',
      hlcolor: '#3e1e5e',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
