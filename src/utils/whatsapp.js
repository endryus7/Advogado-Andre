// Número no formato internacional
export const WHATSAPP_NUMBER = "555192605349";

// Mensagem pré-preenchida
export const WHATSAPP_MESSAGE =
  "Olá, Dr. André Albani Lara.\nGostaria de falar sobre um caso.";

// Monta a URL final do wa.me
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/adv.andrealbanilara/";