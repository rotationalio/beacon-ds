/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  presets: [
    require('@rotationalio/beacon-foundation/lib/tailwindPreset.config'),
  ],
  content: ['./src/**/*.{html,js,tsx,ts}'],
  plugins: [],
};
