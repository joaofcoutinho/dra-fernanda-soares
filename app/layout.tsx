import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dra. Fernanda Soares | Tricologista e Dermatologista em Salvador",
    template: "%s | Dra. Fernanda Soares",
  },
  description:
    "Especialista em transplante capilar e tratamento de alopecia em Salvador. Consulta particular. Agende diretamente online. CRM BA 44447.",
  keywords: [
    "tricologista Salvador",
    "transplante capilar Salvador",
    "tratamento queda de cabelo Salvador",
    "dermatologista particular Salvador",
  ],
  metadataBase: new URL("https://drafernandasoares.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Dra. Fernanda Soares | Tricologista e Dermatologista em Salvador",
    description:
      "Especialista em transplante capilar e saúde capilar em Salvador. Atendimento particular.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
