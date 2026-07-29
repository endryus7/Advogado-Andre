import { motion } from "framer-motion";
import styles from "./Process.module.css";
import SectionTitle from "./SectionTitle";
import { process as steps } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Como Funciona"
          title="Um método claro em quatro etapas"
          subtitle="Do primeiro contato à atuação em juízo, cada fase é conduzida com transparência e método."
        />

        <div className={styles.timeline}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className={styles.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={styles.iconRing}>
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <span className={styles.stepNumber}>Etapa 0{i + 1}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
