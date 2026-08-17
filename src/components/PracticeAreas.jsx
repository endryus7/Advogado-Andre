import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import styles from "./PracticeAreas.module.css";
import SectionTitle from "./SectionTitle";
import { practiceAreas } from "@/data/content";

// Seção Áreas de Atuação
export default function PracticeAreas() {
  // Guarda item aberto
  const [openIndex, setOpenIndex] = useState(null);

  // Alterna o item clicado
  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="areas" className={styles.areas}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Áreas de Atuação"
          title="Um advogado, diversas frentes de atuação"
          subtitle="Direito Criminal é a especialidade do Dr. André Albani Lara. O escritório também atua nas áreas abaixo."
        />

        <div className={styles.accordion}>
          {practiceAreas.map((area, index) => {
            const isOpen = index === openIndex;
            // IDs únicos por item, usados para ligar botão <-> painel via aria (acessibilidade)
            const panelId = `area-panel-${index}`;
            const buttonId = `area-button-${index}`;

            return (
              <div
                key={area.category}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
                <h3 className={styles.itemHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen} // informa leitor de tela se está expandido
                    aria-controls={panelId} // associa o botão ao painel que ele controla
                    onClick={() => toggle(index)}
                  >
                    <span className={styles.triggerLeft}>
                      <span className={styles.category}>{area.category}</span>
                      {area.badge && <span className={styles.badge}>{area.badge}</span>}
                    </span>
                    <ChevronDown size={20} className={styles.chevron} />
                  </button>
                </h3>

                {/* AnimatePresence permite animar a saída do painel ao fechar */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={styles.panelWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }} // expande até a altura natural do conteúdo
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ul className={styles.list}>
                        {area.items.map((item) => (
                          <li key={item}>
                            <Check size={15} strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
