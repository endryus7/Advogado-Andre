import { Instagram, Mail, Phone, MapPin, Clock3 } from "lucide-react";
import styles from "./Footer.module.css";
import logo from "../assets/images/logo.png";
import { services } from "@/data/content";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/utils/whatsapp";

const navLinks = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Como Funciona" },
  { id: "videos", label: "Vídeos" },
  { id: "contact", label: "Contato" },
];

const PHONE_DISPLAY = "(51) 99260-5349";
const EMAIL = "andrelara.advcriminal@gmail.com";
const OAB = "OAB/RS Nº 141.174";

export default function Footer() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <span className={styles.watermark} aria-hidden="true">
        AL
      </span>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <img src={logo} alt="" className={styles.logo} />
              <div>
                <p className={styles.brandName}>André Albani Lara</p>
                <span className={styles.brandTag}>Advocacia Criminal</span>
              </div>
            </div>
            <p className={styles.about}>
              Advocacia com atendimento técnico e humanizado em Porto Alegre e
              Região Metropolitana.
            </p>
            <span className={styles.oab}>{OAB}</span>
          </div>

          <nav aria-label="Navegação do site">
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.list}>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button type="button" onClick={() => go(l.id)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Áreas de atuação">
            <h4 className={styles.colTitle}>Áreas</h4>
            <ul className={styles.list}>
              {services.map((s) => (
                <li key={s.title}>
                  <button type="button" onClick={() => go("services")}>
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className={styles.colTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={15} />
                <span>Porto Alegre e Região Metropolitana</span>
              </li>
              <li>
                <Clock3 size={15} />
                <span>Atendimento 24h — casos de urgência</span>
              </li>
              <li>
                <Phone size={15} />
                <a href={`tel:+55${PHONE_DISPLAY.replace(/\D/g, "")}`}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <Mail size={15} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <Instagram size={15} />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  @adv.andrealbanilara
                </a>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} André Albani Lara — Advocacia Criminal.
            Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}