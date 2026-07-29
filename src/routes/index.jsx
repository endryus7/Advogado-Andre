import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../pages/LandingPage";
import { WHATSAPP_NUMBER, INSTAGRAM_URL } from "../utils/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. André Albani Lara — Advogado Criminalista em Porto Alegre",
      },
      {
        name: "description",
        content:
          "Defesa criminal estratégica em Porto Alegre e Região. Atuação em Direito Penal e Processual Penal: flagrantes, audiência de custódia, habeas corpus e defesa criminal.",
      },
      {
        property: "og:title",
        content:
          "Dr. André Albani Lara — Advocacia Criminal em Porto Alegre",
      },
      {
        property: "og:description",
        content:
          "Atuação rápida, técnica e sigilosa em Direito Penal. Fale diretamente pelo WhatsApp com o advogado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Dr. André Albani Lara",
          description:
            "Advogado especializado em Direito Penal e Direito Processual Penal.",
          areaServed: "Porto Alegre e Região",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porto Alegre",
            addressRegion: "RS",
            addressCountry: "BR",
          },
          telephone: `+${WHATSAPP_NUMBER}`,
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
  component: LandingPage,
});
