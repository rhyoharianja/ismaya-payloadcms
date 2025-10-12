// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/admin/**/*.{js,ts,jsx,tsx}", // Important: Add your admin components folder
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};