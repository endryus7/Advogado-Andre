import { motion } from "framer-motion";
import styles from "./Differentials.module.css";
import SectionTitle from "./SectionTitle";
import { differentials } from "@/data/content";

// grid de cards gerado a partir do array differentials
export default function Differentials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Diferenciais"
          title="Por que confiar sua defesa a este escritório"
          subtitle="Pilares que definem cada atendimento e cada estratégia jurídica."
        />

        <div className={styles.grid}>
          {differentials.map((d, i) => {
            const Icon = d.icon; // cada item traz seu próprio componente de ícone
            return (
              <motion.div
                key={d.title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }} // estado inicial: invisível e deslocado para baixo
                whileInView={{ opacity: 1, y: 0 }} // anima ao entrar na viewport
                viewport={{ once: true, amount: 0.2 }} // dispara só uma vez, com 20% do card visível
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Icon size={28} strokeWidth={1.5} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{d.title}</h3>
                <p className={styles.cardText}>{d.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
