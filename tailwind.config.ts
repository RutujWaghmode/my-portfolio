import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.ts"],
  theme: { extend: { colors: { navy: "#0a1630" } } },
  plugins: [],
};
export default config;
