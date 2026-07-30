import { motion } from "framer-motion";
import { Check } from "lucide-react";
import styles from "./About.module.css";
import dr_andre from "../assets/images/dr.andre.png";

const pillars = [
  "Atuação técnica",
  "Atendimento humanizado",
  "Defesa personalizada",
  "Estratégia jurídica",
  "Compromisso com resultados",
];

const indicators = [
  { title: "Imediato", label: "Atendimento" },
  { title: "Estratégica", label: "Atuação" },
  { title: "POA e Região", label: "Cobertura" },
  { title: "Direito Penal", label: "Especialidade" },
];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div className={styles.imageWrap} {...fade}>
          <span className={styles.frame} />
          <img
            src={dr_andre}
            alt="Atendimento jurídico do escritório Albani Lara"
            className={styles.image}
            loading="lazy"
          />
        </motion.div>

        <motion.div className={styles.content} {...fade}>
          <span className={styles.eyebrow}>Sobre o Advogado</span>
          <h2 className={styles.title}>
            Compromisso com sua liberdade e seus direitos.
          </h2>
          <p className={styles.description}>
            Dr. André Albani Lara atua na advocacia criminal com foco em Direito Penal
            e Direito Processual Penal. Cada caso é conduzido com técnica, discrição
            e proximidade reunindo estratégia jurídica apurada e atendimento próximo
            ao cliente em todas as etapas do processo.
          </p>

          <ul className={styles.pillars}>
            {pillars.map((p) => (
              <li key={p}>
                <Check size={16} strokeWidth={2.5} />
                {p}
              </li>
            ))}
          </ul>

          <div className={styles.indicators}>
            {indicators.map((i) => (
              <div key={i.label} className={styles.indicator}>
                <strong>{i.title}</strong>
                <span>{i.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
