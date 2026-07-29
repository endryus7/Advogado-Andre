import { motion } from "framer-motion";
import { Check, MessageCircle, CalendarClock } from "lucide-react";
import styles from "./Hero.module.css";
import Button from "./Button";
import lawyer from "@/assets/lawyer.png.asset.json";
import { WHATSAPP_URL } from "@/utils/whatsapp";

const benefits = [
  "Atendimento imediato",
  "Atuação em flagrantes",
  "Defesa estratégica",
  "Audiência de Custódia",
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgOrn} />
      <div className={styles.grid} />

      <div className={styles.container}>
        <div className={styles.left}>
          <motion.span className={styles.eyebrow} {...fade(0)}>
            Advocacia Criminal — Porto Alegre e Região
          </motion.span>

          <motion.h1 className={styles.title} {...fade(0.1)}>
            Defesa Criminal <em>Estratégica</em> para Momentos Decisivos
          </motion.h1>

          <motion.p className={styles.subtitle} {...fade(0.2)}>
            Atuação rápida, técnica e comprometida na defesa dos seus direitos em casos
            de Direito Penal e Direito Processual Penal.
          </motion.p>

          <motion.ul className={styles.benefits} {...fade(0.3)}>
            {benefits.map((b) => (
              <li key={b}>
                <Check size={16} strokeWidth={2.5} />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div className={styles.actions} {...fade(0.4)}>
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Button>
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghostLight"
            >
              <CalendarClock size={18} />
              Agendar Atendimento
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.photoFrame}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className={`${styles.corner} ${styles.cornerTL}`} />
            <span className={`${styles.corner} ${styles.cornerBR}`} />
            <img
              src={lawyer.url}
              alt="Dr. André Albani Lara - Advogado Criminalista"
              className={styles.photo}
              loading="eager"
            />
            <div className={styles.badge}>
              <strong>Dr. André Albani Lara</strong>
              <span>Advogado Criminalista</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <span className={styles.scrollHint}>Role para explorar</span>
    </section>
  );
}
