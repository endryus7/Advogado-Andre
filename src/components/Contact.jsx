import { motion } from "framer-motion";
import { MessageCircle, Clock, CalendarClock, MapPin, Check } from "lucide-react";
import styles from "./Contact.module.css";
import { WHATSAPP_URL } from "@/utils/whatsapp";

const infos = [
  { icon: MessageCircle, title: "WhatsApp", text: "+55 51 9260-5349" },
  { icon: Clock, title: "Atendimento", text: "Imediato para casos urgentes" },
  { icon: CalendarClock, title: "Agenda", text: "Mediante agendamento" },
  { icon: MapPin, title: "Local", text: "Porto Alegre e Região" },
];

const checks = [
  "Atendimento rápido",
  "Conversa sigilosa",
  "Resposta direta pelo WhatsApp",
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div className={styles.left} {...fade}>
          <span className={styles.eyebrow}>Contato</span>
          <h2 className={styles.title}>Atendimento direto e sigiloso</h2>
          <p className={styles.intro}>
            Precisa de orientação jurídica urgente? Entre em contato agora mesmo pelo
            WhatsApp para uma análise inicial do seu caso.
          </p>

          <div className={styles.infoGrid}>
            {infos.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className={styles.info}>
                  <span className={styles.infoIcon}>
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className={styles.infoTitle}>{i.title}</h3>
                    <p className={styles.infoText}>{i.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className={styles.card} {...fade}>
          <span className={styles.cardBadge}>
            <MessageCircle size={14} /> Canal Oficial
          </span>
          <h3 className={styles.cardTitle}>
            Fale diretamente com o advogado
          </h3>
          <p className={styles.cardText}>
            Clique no botão abaixo para iniciar uma conversa diretamente pelo WhatsApp.
            O atendimento é rápido, sigiloso e realizado pelo próprio advogado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardBtn}
            aria-label="Falar no WhatsApp com o Dr. André Albani Lara"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
          </a>
          <ul className={styles.checks}>
            {checks.map((c) => (
              <li key={c}>
                <Check size={16} strokeWidth={2.5} />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
