import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
        appBlack: "var(--app-black)",
        cardBorder: 'var(--card-border)',
        cardBackground: 'var(--card-background)',
        cardPrimary: 'var(--card-primary)',
        cardAccent: 'var(--card-accent)',
        cardHover: 'var(--card-hover)',
      },
      fontFamily: {
        nuckle: ['var(--font-nuckle)']
      },
    },
  },
};
export default config;
