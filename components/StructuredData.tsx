import { clinicas, site } from "@/lib/site";

const BASE = "https://drafernandasoares.com.br";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.doctor,
    medicalSpecialty: ["Dermatology"],
    description:
      "Médica Dermatologista e Tricologista, especialista em transplante capilar, alopecia e dermatologia estética. Atendimento particular em Salvador.",
    url: BASE,
    image: `${BASE}/og-image.jpg`,
    telephone: clinicas[0].telefone,
    areaServed: { "@type": "City", name: "Salvador" },
    knowsAbout: [
      "Tricologia",
      "Transplante Capilar",
      "Alopecia",
      "Mesoterapia Capilar",
      "Dermatologia Estética",
    ],
    sameAs: [site.instagram, site.doctoralia].filter(Boolean),
    identifier: [
      { "@type": "PropertyValue", name: "CRM", value: site.crm },
      { "@type": "PropertyValue", name: "RQE", value: site.rqe },
    ],
    location: clinicas.map((c) => ({
      "@type": "MedicalClinic",
      name: c.nome,
      telephone: c.telefone,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.endereco,
        addressLocality: "Salvador",
        addressRegion: "BA",
        addressCountry: "BR",
      },
      openingHours: c.horariosSchema,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
