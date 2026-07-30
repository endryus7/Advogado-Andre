

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "@/assets/images/logo.png";

const links = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "areas", label: "Áreas" },
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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      closeRef.current?.focus();
    } else {
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

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }

        if (!e.shiftKey && document.activeElement === last) {
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

  setTimeout(() => {
    const el = document.getElementById(id);

    if (!el) return;

    const headerOffset = 90;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }, 300);
};

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          <button onClick={ () => go("home")}  className={styles.brand} aria-label="Ir para início">
            <img src={logo} alt="Dr. André Albani Lara" className={styles.logo} />

            <span className={styles.brandText}>
              <span className={styles.brandName}>André Albani Lara</span>

              <span className={styles.brandTag}>Advocacia Criminal</span>
            </span>
          </button>

          <nav className={styles.nav} aria-label="Navegação principal">
            <ul className={styles.menu}>
              {links.map((item) => (
                <li key={item.id}>
                  <button className={styles.link} onClick={() => go(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button onClick={() => go("contact")} className={styles.cta}>
            <Mail size={17} />
            Entrar em Contato
            
          </button>

          <button
            ref={burgerRef}
            className={styles.burger}
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <div className={styles.mobileWrapper}>
            {/* Backdrop */}

            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}

            <motion.aside
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              className={styles.mobileDrawer}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 230,
              }}
            >
              <div className={styles.mobileHead}>
                <div className={styles.brand}>
                  <img src={logo} alt="" className={styles.logo} />

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
                  <X size={22} />
                </button>
              </div>

              <div className={styles.mobileDescription}>
                Atendimento jurídico especializado em Direito Penal e Processo Penal.
              </div>

              <ul className={styles.mobileMenu}>
                {links.map((item) => (
                  <li key={item.id}>
                    <button className={styles.mobileLink} onClick={() => go(item.id)}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className={styles.mobileFooter}>
                <button className={styles.mobileCta} onClick={() => go("contact")}>
                  <Mail size={18} />
                  Entrar em Contato
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
