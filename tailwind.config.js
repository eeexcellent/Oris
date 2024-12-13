/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Satoshi",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    extend: {
      colors: {
        main: "#FFFFFF",
        secondary: "#8E8C91",
        answer: "#85E8B0",
        chat: "#1E1A23",
        avatar: "#F3C48E",
        "avatar-read": "#D8C3F3",
        "send-btn": "#9747FF",
        line: "#FFFFFF1F",
        input: "#B8B8B8",
        online: "#69C38B",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
