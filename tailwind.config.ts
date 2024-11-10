import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding: "15px",
      },
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        light: "#f8f9fa",
        dark: "#343a40",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
