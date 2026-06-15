import type { MetadataRoute } from "next";

const base = "https://drafernandasoares.com.br";

const rotas = [
  "",
  "/quem-somos",
  "/tratamentos-capilares",
  "/tratamentos-dermatologicos",
  "/localizacao",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return rotas.map((r) => ({
    url: `${base}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
