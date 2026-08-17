import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Services.module.css";
import SectionTitle from "./SectionTitle";
import { services } from "@/data/content";
import { WHATSAPP_URL } from "@/utils/whatsapp";

// Seção Áreas de Atuação
export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Áreas de Atuação"
          title="Serviços em Advocacia Criminal"
          subtitle="Atuação técnica em todas as fases do processo, com foco em resultados concretos e proteção dos seus direitos."
        />

        <div className={styles.grid}>
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06, // cascata suave entre os cards
                  ease: [0.22, 1, 0.36, 1], // curva de easing customizada
                }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.description}</p>
                {/* Link direto para o WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                  aria-label={`Consultar sobre ${s.title}`}
                >
                  Consultar Agora <ArrowRight size={14} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
