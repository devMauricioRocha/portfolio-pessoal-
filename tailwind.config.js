/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        colors: {
            // primary: "var(--main-color)",
            theme: {
                "main-color": "var(--main-color)",
                "bg-900": "var(--bg-900)",
                "bg-900-opacity": "var(--bg-900-opacity)",
                "bg-500": "var(--bg-500)",
                "text-primary": "var(--text-primary)",
                "text-secundary": "var(--text-secundary)",
            },
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                mochiy: ["Mochiy Pop One", "sans-serif"],
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities(
                {
                    ".gradient-text": {
                        "background-color": "var(--texto-animacao)",
                        "background-image":
                            "linear-gradient(90deg, var(--main-color), var(--main-color))",
                        "background-repeat": "no-repeat",
                        "background-size": "0 100%",
                        color: "transparent",
                        "-webkit-background-clip": "text",
                        "background-clip": "text",
                        transition: "background-size 0.2s linear",
                    },
                    ".gradient-text-hover": {
                        "background-size": "100% 100%",
                    },
                },
                ["responsive", "hover"]
            );
        }),
    ],
};
