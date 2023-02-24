/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url('/public/images/gerald.jpeg')",
                "about-img": "url('/public/images/wallpaper2.jfif')",
            },
            fontFamily: {
                "play-fair": "'Playfair Display', serif",
            }
        },
    },
    plugins: [],
};
