import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppFloat.module.css";
import { WHATSAPP_URL } from "@/utils/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.float}
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className={styles.label}>Fale no WhatsApp</span>
    </a>
  );
}
