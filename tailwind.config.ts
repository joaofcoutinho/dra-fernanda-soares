import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base clara
        ivory: "#FBFAF4", // off-white quente (mais próximo do branco)
        cream: "#F4F0E8", // off-white levemente mais fundo (seções alternadas)
        sand: "#E6DECA",
        // Azul naval — cor de ASSINATURA (botões/CTA, acentos)
        navy: {
          DEFAULT: "#1E3A5F", // navy — botões e acentos
          dark: "#16304E", // hover do botão
          deep: "#13243B", // navy escuro — grandes áreas escuras
        },
        // Texto — navy escuro (quase-preto azulado)
        ink: {
          DEFAULT: "#13243B",
          soft: "#566377",
          deep: "#0C1726",
        },
        // Acento (token "gold") — agora navy
        gold: {
          DEFAULT: "#1E3A5F",
          light: "#3A5C82",
          pale: "#C6D4E2",
        },
        // Terciária — champanhe claro (destaques e degradês) — nova ID
        champagne: {
          DEFAULT: "#DEC58F",
          light: "#ECDAB6",
          deep: "#C2A064",
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
        soft: "0 2px 8px rgba(19,36,59,0.05), 0 18px 50px -28px rgba(19,36,59,0.28)",
        lift: "0 6px 18px rgba(19,36,59,0.10), 0 34px 70px -32px rgba(19,36,59,0.42)",
        badge: "0 10px 30px -10px rgba(19,36,59,0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
