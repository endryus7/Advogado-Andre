import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import styles from "./CTA.module.css";
import Button from "./Button";
import { WHATSAPP_URL } from "@/utils/whatsapp";

// Seção de chamada direto para o WhatsApp
export default function CTA() {
  return (
    <section className={styles.cta}>
      {/* Camada de fundo decorativa */}
      <div className={styles.bg} />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }} // anima ao entrar na tela
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.eyebrow}>Atuação Imediata</span>
        <h2 className={styles.title}>
          Está enfrentando um <em>processo criminal</em>?
        </h2>
        <p className={styles.subtitle}>
          Uma atuação rápida pode fazer toda a diferença. Fale agora com o Dr. André Albani Lara e
          receba uma análise inicial do seu caso.
        </p>
        <div className={styles.actions}>
          <Button
            as="a"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            size="large"
            className={styles.ctaBtn}
          >
            <MessageCircle size={20} />
            Fale agora pelo WhatsApp
            <ArrowRight size={18} className={styles.btnArrow} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
