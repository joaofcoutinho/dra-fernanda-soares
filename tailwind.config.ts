import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base bege clean
        ivory: "#FFFDEA",
        cream: "#F7F1DA",
        sand: "#EDE4C6",
        // Mauve / violeta — cor de ASSINATURA (botões/CTA, acentos)
        // tokens mantêm o nome "navy" por compatibilidade
        navy: {
          DEFAULT: "#9E6B78", // mauve — botões e acentos
          dark: "#834F5D", // hover do botão
          deep: "#2A1F24", // plum-noir — grandes áreas escuras (derivado do mauve)
        },
        // Texto — plum-noir sofisticado (quase-preto da família mauve)
        ink: {
          DEFAULT: "#2A1F24",
          soft: "#6F5F66",
          deep: "#1E161A",
        },
        // Acento (antes "gold") — agora mauve
        gold: {
          DEFAULT: "#9E6B78",
          light: "#B98C97",
          pale: "#E3CBD1",
        },
        // Terciária — champanhe / rosé-gold (destaques e degradês)
        champagne: {
          DEFAULT: "#C9A06B",
          light: "#DFC196",
          deep: "#A87E4E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        luxe: "0.18em",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(94,58,69,0.05), 0 18px 50px -28px rgba(94,58,69,0.28)",
        lift: "0 6px 18px rgba(94,58,69,0.10), 0 34px 70px -32px rgba(94,58,69,0.42)",
        badge: "0 10px 30px -10px rgba(94,58,69,0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
