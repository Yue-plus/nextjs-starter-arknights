/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {
      theme: {
        colors: {
          'arkBlue': '#22bbff',
          'endYellow': '#ffee22',
        }
      }
    },
  },
};

export default config;
