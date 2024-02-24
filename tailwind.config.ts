import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caudex: ["Caudex", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        khaki: "rgb(94,109,85)",
        khakiLight: "#939E8C",
        bone1: "#E8E3D6",
        bone2: "#F7F1E9",
        graphite1: "#404040",
        greyish: "#CACACA"
      },
    },
  },
  plugins: [],
};
export default config;
