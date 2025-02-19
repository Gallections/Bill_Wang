// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // This is where your files live
  ],
  safelist: [
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
    // Add any additional size classes you may use
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
