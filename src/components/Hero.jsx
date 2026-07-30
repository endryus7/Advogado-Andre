import { motion } from "framer-motion";
import {
  Check,
  MessageCircle,
  ShieldCheck,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
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

const bottomItems = [
  {
    tag: "01",
    title: "Atuação Imediata",
    description: "Resposta rápida para casos urgentes e flagrantes.",
  },
  {
    tag: "02",
    title: "Direito Penal",
    description: "Defesa técnica focada na garantia dos seus direitos.",
  },
  {
    tag: "03",
    title: "Atendimento Regional",
    description: "Atuação presencial em Porto Alegre e consultas online.",
  },
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
      {/* Background isolado num container com overflow:hidden, pra animação de
          zoom (scale 1.08 -> 1) não vazar pra fora dos limites do Hero. O
          .hero em si precisa manter overflow visível de propósito, pois a
          bottom bar flutuante sai pela metade dele em telas grandes. */}
      <div className={styles.bgLayer}>
        <motion.img
          src={heroOffice}
          alt=""
          className={styles.bgImage}
          loading="eager"
          fetchPriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className={styles.overlay} />
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <motion.div className={styles.eyebrowWrapper} {...fadeUp(0)}>
            <span className={styles.eyebrow}>
              ADVOCACIA CRIMINAL • PORTO ALEGRE E REGIÃO
            </span>
          </motion.div>

          <motion.h1 className={styles.title} {...fadeUp(0.1)}>
            Defesa Criminal <br />
            <em>Estratégica</em> para <br />
            Momentos Decisivos
          </motion.h1>

          <motion.div className={styles.divider} {...fadeUp(0.18)} />

          <motion.p className={styles.subtitle} {...fadeUp(0.2)}>
            Atuação técnica, rápida e personalizada na defesa dos seus direitos
            em casos de Direito Penal e Processual Penal. Cada caso exige
            estratégia, experiência e atuação imediata.
          </motion.p>

          <motion.div className={styles.actions} {...fadeUp(0.3)}>
            <Button
              as="a"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className={styles.primaryBtn}
            >
              <MessageCircle size={18} />
              <span>Falar no WhatsApp</span>
              <ArrowRight size={16} className={styles.btnArrow} />
            </Button>

            <Button
              as="a"
              href="#sobre"
              variant="ghostLight"
              className={styles.secondaryBtn}
            >
              Conheça o advogado
            </Button>
          </motion.div>

          <motion.ul className={styles.badges} {...fadeUp(0.4)}>
            {benefits.map((item) => (
              <li key={item} className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <Check size={14} color="var(--al-accent, #e8ddd0)" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 40, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.infoCardWrapper}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <span className={styles.statusPulse}>
                  <ShieldCheck size={20} color="var(--al-accent, #e8ddd0)" />
                </span>
                <span>ATENDIMENTO URGENTE 24H</span>
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
                  <span className={styles.itemIcon}>
                    <Phone size={18} color="var(--al-accent, #e8ddd0)" />
                  </span>
                  <div>
                    <strong>Contato Direto</strong>
                    <span>Plantão via WhatsApp</span>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <span className={styles.itemIcon}>
                    <MapPin size={18} color="var(--al-accent, #e8ddd0)" />
                  </span>
                  <div>
                    <strong>Localização</strong>
                    <span>Porto Alegre e Região Metropolitana</span>
                  </div>
                </div>

                <div className={styles.cardItem}>
                  <span className={styles.itemIcon}>
                    <Clock3 size={18} color="var(--al-accent, #e8ddd0)" />
                  </span>
                  <div>
                    <strong>Agilidade</strong>
                    <span>Pronta resposta para prisões e flagrantes</span>
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
                <span>Solicitar Atendimento Imediato</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBarContainer}>
          <ul className={styles.bottomBar}>
            {bottomItems.map(({ tag, title, description }) => (
              <li className={styles.bottomItem} key={tag}>
                <span className={styles.itemTag}>{tag}</span>
                <div>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}