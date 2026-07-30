import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "../assets/images/logo.png";
import { WHATSAPP_URL } from "@/utils/whatsapp";

const links = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Como Funciona" },
  { id: "videos", label: "Vídeos" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      // Move o foco para dentro do painel assim que ele abre
      closeRef.current?.focus();
    } else {
      // Devolve o foco pra onde o usuário estava (evita "perder" o teclado)
      burgerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      // Trap de foco: Tab não pode escapar do painel enquanto ele está aberto
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          <button onClick={() => go("home")} className={styles.brand} aria-label="Início">
            <img src={logo} alt="Dr. André Albani Lara" className={styles.logo} />
            <span className={styles.brandText}>
              <span className={styles.brandName}>André Albani Lara</span>
              <span className={styles.brandTag}>Advocacia Criminal</span>
            </span>
          </button>

          <nav aria-label="Navegação principal">
            <ul className={styles.menu}>
              {links.map((l) => (
                <li key={l.id}>
                  <button className={styles.link} onClick={() => go(l.id)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            aria-label="Fale no WhatsApp"
          >
            <MessageCircle size={16} />
            Fale no WhatsApp
          </a>

          <button
            ref={burgerRef}
            className={styles.burger}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className={styles.mobile}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileHead}>
              <div className={styles.brand}>
                <img src={logo.url} alt="" className={styles.logo} />
                <span className={styles.brandText}>
                  <span className={styles.brandName}>André Albani Lara</span>
                  <span className={styles.brandTag}>Advocacia Criminal</span>
                </span>
              </div>
              <button
                ref={closeRef}
                className={styles.mobileClose}
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={28} />
              </button>
            </div>
            <ul className={styles.mobileMenu}>
              {links.map((l) => (
                <li key={l.id}>
                  <button className={styles.mobileLink} onClick={() => go(l.id)}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              <MessageCircle size={18} />
              Fale no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
