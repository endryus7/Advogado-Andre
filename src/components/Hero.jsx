import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  ShieldCheck,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

import styles from "./Hero.module.css";
import Button from "./Button";

import heroOffice from "@/assets/images/hero-office.jpg";
import { WHATSAPP_URL } from "@/utils/whatsapp";

const benefits = [
  "Prisão em Flagrante",
  "Audiência de Custódia",
  "Habeas Corpus",
  "Defesa Estratégica",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <img
        src={heroOffice}
        alt=""
        className={styles.bgImage}
        loading="eager"
        fetchPriority="high"
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* ================= LEFT ================= */}

        <div className={styles.left}>
          <motion.span className={styles.eyebrow} {...fadeUp(0)}>
            ADVOCACIA CRIMINAL • PORTO ALEGRE E REGIÃO
          </motion.span>

          <motion.h1 className={styles.title} {...fadeUp(0.1)}>
            Defesa Criminal
            <br />
            <em>Estratégica</em> para
            <br />
            Momentos Decisivos
          </motion.h1>

          <motion.div
            className={styles.divider}
            {...fadeUp(0.18)}
          />

          <motion.p className={styles.subtitle} {...fadeUp(0.2)}>
            Atuação técnica, rápida e personalizada na defesa dos seus
            direitos em casos de Direito Penal e Direito Processual Penal.
            Cada caso exige estratégia, experiência e atuação imediata.
          </motion.p>

          <motion.div
            className={styles.actions}
            {...fadeUp(0.3)}
          >
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
              href="#sobre"
              variant="ghostLight"
            >
              Conheça o advogado
            </Button>
          </motion.div>

          <motion.div
            className={styles.badges}
            {...fadeUp(0.4)}
          >
            {benefits.map((item) => (
              <div key={item} className={styles.badge}>
                <Check size={15} />

                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <ShieldCheck size={22} />

              <span>ATENDIMENTO IMEDIATO</span>
            </div>

            <h3>
              Defesa Técnica,
              <br />
              Estratégica e
              <br />
              Personalizada.
            </h3>

            <div className={styles.cardDivider} />

            <div className={styles.cardItems}>
              <div className={styles.cardItem}>
                <Phone size={18} />

                <div>
                  <strong>Contato</strong>

                  <span>WhatsApp</span>
                </div>
              </div>

              <div className={styles.cardItem}>
                <MapPin size={18} />

                <div>
                  <strong>Localização</strong>

                  <span>Porto Alegre e Região</span>
                </div>
              </div>

              <div className={styles.cardItem}>
                <Clock3 size={18} />

                <div>
                  <strong>Disponibilidade</strong>

                  <span>Atendimento em casos urgentes</span>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardButton}
            >
              <MessageCircle size={18} />

              Solicitar Atendimento
            </a>
          </div>
        </motion.div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomItem}>
          <strong>Atuação Imediata</strong>

          <span>Resposta rápida para casos urgentes.</span>
        </div>

        <div className={styles.bottomItem}>
          <strong>Direito Penal</strong>

          <span>Defesa técnica e personalizada.</span>
        </div>

        <div className={styles.bottomItem}>
          <strong>Porto Alegre</strong>

          <span>Atendimento presencial e online.</span>
        </div>
      </div>

      <span className={styles.scrollHint}>
        Role para explorar
      </span>
    </section>
  );
}