import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Fernanda Soares",
    title: "Dra. Fernanda Soares | Tricologista e Dermatologista em Salvador",
    description:
      "Especialista em transplante capilar e saúde capilar em Salvador. Atendimento particular.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Fernanda Soares — Dermatologia e Tricologia em Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Fernanda Soares | Tricologista e Dermatologista em Salvador",
    description:
      "Especialista em transplante capilar e saúde capilar em Salvador. Atendimento particular.",
    images: ["/og-image.jpg"],
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
        <BackToTop />
        <StructuredData />
      </body>
    </html>
  );
}
