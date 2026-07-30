import { Instagram, ChevronRight } from "lucide-react";
import styles from "./Footer.module.css";
import logo from "../assets/images/logo.png";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/utils/whatsapp";

const links = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Como Funciona" },
  { id: "videos", label: "Vídeos" },
  { id: "contact", label: "Contato" },
];

export default function Footer() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <img src={logo} alt="Logo Albani Lara" className={styles.logo} />
              <div>
                <p className={styles.brandName}>Dr. André Albani Lara</p>
                <span className={styles.brandTag}>Advocacia Criminal</span>
              </div>
            </div>
            <p className={styles.about}>
              Advogado especializado em Direito Penal e Direito Processual Penal.
              Defesa, compromisso e seriedade em Porto Alegre e região.
            </p>
          </div>

          <div>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.list}>
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)}>
                    <ChevronRight size={12} /> {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Conecte-se</h4>
            <ul className={styles.list}>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <ChevronRight size={12} /> WhatsApp
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <ChevronRight size={12} /> Instagram
                </a>
              </li>
            </ul>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              style={{ marginTop: 20 }}
              aria-label="Instagram"
            >
              <Instagram size={16} /> @adv.andrealbanilara
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Dr. André Albani Lara — Advocacia Criminal.
            Todos os direitos reservados.
          </span>
          <span>Porto Alegre — RS</span>
        </div>
      </div>
    </footer>
  );
}
