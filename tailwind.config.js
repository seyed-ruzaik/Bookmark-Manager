/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f9f9f9",
        "shade-white": "#fff",
        black: "#000",
        royalblue: {
          "100": "#6a82ff",
          "200": "#4d74f9",
        },
        gray: "rgba(0, 0, 0, 0.25)",
        darkslateblue: {
          "100": "rgba(48, 56, 125, 0.24)",
          "200": "rgba(48, 56, 125, 0.69)",
          "300": "rgba(48, 56, 125, 0.32)",
          "400": "rgba(48, 56, 125, 0.52)",
        },
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.46)",
          "200": "rgba(226, 226, 229, 0.18)",
        },
        hotpink: "#ff85ce",
        "shade-paragraph": "#696d6d",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        gilroy: "Gilroy",
      },
      borderRadius: {
        "21xl": "40px",
        "11xl": "30px",
        "mid-7": "17.7px",
        "smi-4": "12.4px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "base-6": "16.6px",
      xl: "20px",
      "45xl": "64px",
      lg: "18px",
      "11xl": "30px",
      "3xs-8": "9.8px",
      "xs-6": "11.6px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
