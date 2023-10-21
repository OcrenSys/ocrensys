import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "teal-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#001617",
            foreground: "#ffffff",
            focus: "#F182F6",
            primary: {
              50: "#A1EEF2",
              100: "#8FE1E6",
              200: "#6BC7CC",
              300: "#48AEB3",
              400: "#249499",
              500: "#007A80",
              600: "#006266",
              700: "#00494D",
              800: "#00494D",
              900: "#00181A",
              DEFAULT: "#007A80",
              foreground: "#ffffff",
            },
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
