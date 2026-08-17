import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import styles from "./Navbar.module.css";
import logo from "@/assets/images/logo.png";

// Links do menu
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
  const [scrolled, setScrolled] = useState(false); // controla o fundo escuro/blur ao rolar a página
  const [open, setOpen] = useState(false); // controla se o menu mobile está aberto
  const burgerRef = useRef(null); // botão hambúrguer
  const panelRef = useRef(null); // painel do drawer
  const closeRef = useRef(null); // botão de fechar

  // Detecta scroll da página para alternar o estilo "scrolled" da navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll(); // roda uma vez no mount, caso a página já abra rolada

    window.addEventListener("scroll", onScroll, {
      passive: true, // melhora performance do scroll
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ao abrir/fechar o menu mobile: trava o scroll do body e move o foco
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      closeRef.current?.focus();
    } else {
      burgerRef.current?.focus();
    }
  }, [open]);

  // Enquanto o menu mobile está aberto: fecha com Esc e prende o Tab dentro do drawer
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        // Busca todos os elementos focáveis dentro do drawer
        const focusable = panelRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        // Shift+Tab no primeiro item volta para o último (loop reverso)
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }

        // Tab no último item volta para o primeiro (loop normal)
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Scroll suave
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  // Fecha o menu mobile e navega até a seção
  const go = (id) => {
    setOpen(false);
    document.body.style.overflow = "";
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} // navbar desliza de cima para baixo ao carregar
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          {/* Logo/nome clicável */}
          <button onClick={() => go("home")} className={styles.brand} aria-label="Ir para início">
            <img src={logo} alt="Dr. André Albani Lara" className={styles.logo} />

            <span className={styles.brandText}>
              <span className={styles.brandName}>André Albani Lara</span>

              <span className={styles.brandTag}>Advocacia Criminal</span>
            </span>
          </button>

          {/* Menu horizontal */}
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

          {/* CTA de contato */}
          <button onClick={() => go("contact")} className={styles.cta}>
            <Mail size={17} />
            Entrar em Contato
          </button>

          {/* Botão hambúrguer */}
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

      {/* AnimatePresence anima a saída do drawer/backdrop ao fechar */}
      <AnimatePresence>
        {open && (
          <div className={styles.mobileWrapper}>
            {/* Backdrop: fundo escurecido, clicar nele fecha o menu */}

            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer: painel lateral com o menu mobile, entra deslizando da direita */}

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
                type: "spring", // animação com física de mola
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
