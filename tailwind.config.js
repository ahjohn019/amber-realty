/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './vuejs/**/*.js',
        './vuejs/**/*.vue',
        './resources/**/*.scss',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
    safelist: [{ pattern: /./ }],
};
