import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        appBlack: "var(--app-black)",
        cardBorder: 'var(--card-border)',
      },
      fontFamily: {
        nuckle: ['var(--font-nuckle)']
      },
    },
  },
};
export default config;
