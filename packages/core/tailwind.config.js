/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  presets: [require('@rotational/beacon-foundation/lib/tailwindPreset.config')],
  content: ['./src/**/*.{html,js,tsx,ts}'],
  plugins: [],
};
