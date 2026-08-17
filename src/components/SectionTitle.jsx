import styles from "./SectionTitle.module.css";

// Componente de cabeçalho reutilizável
export default function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <header className={`${styles.title} ${center ? styles.center : ""}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.heading}>{title}</h2>
      {/* Subtítulo */}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
