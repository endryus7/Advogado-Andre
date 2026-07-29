import { motion } from "framer-motion";
import styles from "./Differentials.module.css";
import SectionTitle from "./SectionTitle";
import { differentials } from "@/data/content";

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
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
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
