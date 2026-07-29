import { motion } from "framer-motion";
import styles from "./VideoSection.module.css";
import SectionTitle from "./SectionTitle";
import { videos } from "@/data/content";

export default function VideoSection() {
  return (
    <section id="videos" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Audiências e Atuações"
          title="Registros de atuação profissional"
          subtitle="Alguns momentos e conteúdos da atuação do Dr. André Albani Lara."
        />

        <div className={styles.grid}>
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.frame}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className={styles.meta}>
                <h3 className={styles.metaTitle}>{v.title}</h3>
                <span className={styles.metaTag}>YouTube</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
