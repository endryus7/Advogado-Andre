import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  MessageCircle,
  Clock,
  CalendarClock,
  MapPin,
  Send,
  Loader2,
  User,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import styles from "./Contact.module.css";
import { services, practiceAreas } from "@/data/content";
import { WHATSAPP_URL } from "@/utils/whatsapp";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const infos = [
  { icon: MessageCircle, title: "WhatsApp", text: "+55 51 9260-5349" },
  { icon: Clock, title: "Atendimento", text: "Imediato para casos urgentes" },
  { icon: CalendarClock, title: "Agenda", text: "Mediante agendamento" },
  { icon: MapPin, title: "Local", text: "Porto Alegre e Região" },
];

const otherAreas = practiceAreas
  .filter((area) => area.category !== "Direito Criminal")
  .map((area) => area.category);

const subjects = [...services.map((s) => s.title), ...otherAreas, "Outro assunto"];

const VALID_DDDS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function formatBrazilPhone(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);
  if (rest.length <= 4) return `(${ddd}) ${rest}`;
  if (digits.length <= 10) return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`;
}

function isValidBrazilPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 10 && digits.length !== 11) return false;
  if (!VALID_DDDS.has(Number(digits.slice(0, 2)))) return false;
  if (digits.length === 11 && digits[2] !== "9") return false;
  return true;
}

const validators = {
  name: (v) => (v.trim().length >= 3 ? "" : "Informe seu nome completo."),
  phone: (v) =>
    isValidBrazilPhone(v) ? "" : "Telefone inválido. Use um número brasileiro com DDD.",
  email: (v) => (EMAIL_REGEX.test(v.trim()) ? "" : "Informe um e-mail válido."),
  subject: (v) => (v ? "" : "Selecione o assunto."),
  message: (v) =>
    v.trim().length >= 10 ? "" : "Descreva brevemente o seu caso (mín. 10 caracteres).",
};

const initialForm = { name: "", phone: "", email: "", subject: "", message: "" };

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7 },
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validators[field](value) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validators[field](form[field]) }));
  };

  const handlePhoneChange = (value) => {
    setField("phone", formatBrazilPhone(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = Object.fromEntries(
      Object.entries(validators).map(([field, validate]) => [field, validate(form[field])]),
    );
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, email: true, subject: true, message: true });

    const firstInvalid = Object.keys(nextErrors).find((field) => nextErrors[field]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Credenciais do EmailJS não configuradas neste ambiente (.env ausente).
      console.error(
        "EmailJS não configurado: defina VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY.",
      );
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: "Dr. André Albani Lara",
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setStatus("success");
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("Falha ao enviar formulário via EmailJS:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div className={styles.left} {...fade}>
          <span className={styles.eyebrow}>Contato</span>
          <h2 className={styles.title}>Atendimento direto e sigiloso</h2>
          <p className={styles.intro}>
            Precisa de orientação jurídica urgente? Preencha o formulário ao lado para
            uma análise inicial do seu caso.
          </p>

          <div className={styles.infoGrid}>
            {infos.map((i) => {
              const Icon = i.icon;
              return (
                <div key={i.title} className={styles.info}>
                  <span className={styles.infoIcon}>
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className={styles.infoTitle}>{i.title}</h3>
                    <p className={styles.infoText}>{i.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className={styles.card} {...fade}>
          <span className={styles.cardBadge}>
            <MessageCircle size={14} /> Canal Oficial
          </span>
          <h3 className={styles.cardTitle}>Solicite uma análise do seu caso</h3>
          <p className={styles.cardText}>
            Preencha os dados abaixo. Sua mensagem será enviada diretamente por
            e-mail para o advogado, com atendimento sigiloso.
          </p>
          <span className={styles.requiredNote}>* Todos os campos são obrigatórios</span>

          {status === "success" && (
            <p className={styles.statusSuccess} role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              Mensagem enviada com sucesso! O Dr. André Albani Lara entrará em
              contato em breve.
            </p>
          )}

          {status === "error" && (
            <p className={styles.statusError} role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              Não foi possível enviar agora. Tente novamente ou{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                fale pelo WhatsApp
              </a>
              .
            </p>
          )}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="contact-name">
                Nome completo <span aria-hidden="true">*</span>
              </label>
              <div className={styles.inputWrap}>
                <User size={17} aria-hidden="true" />
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
              </div>
              {touched.name && errors.name && (
                <span id="contact-name-error" className={styles.error} role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-phone">
                  Telefone (WhatsApp) <span aria-hidden="true">*</span>
                </label>
                <div className={styles.inputWrap}>
                  <Phone size={17} aria-hidden="true" />
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder="(51) 99260-5349"
                    required
                    value={form.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  />
                </div>
                {touched.phone && errors.phone && (
                  <span id="contact-phone-error" className={styles.error} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">
                  E-mail <span aria-hidden="true">*</span>
                </label>
                <div className={styles.inputWrap}>
                  <Mail size={17} aria-hidden="true" />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                  />
                </div>
                {touched.email && errors.email && (
                  <span id="contact-email-error" className={styles.error} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-subject">
                Assunto <span aria-hidden="true">*</span>
              </label>
              <select
                id="contact-subject"
                name="subject"
                required
                value={form.subject}
                onChange={(e) => setField("subject", e.target.value)}
                onBlur={() => handleBlur("subject")}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              >
                <option value="" disabled>
                  Selecione o assunto
                </option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {touched.subject && errors.subject && (
                <span id="contact-subject-error" className={styles.error} role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">
                Mensagem <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
                onBlur={() => handleBlur("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {touched.message && errors.message && (
                <span id="contact-message-error" className={styles.error} role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={styles.cardBtn}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <Loader2 size={20} className={styles.spin} />
              ) : (
                <Send size={20} />
              )}
              {status === "submitting" ? "Enviando..." : "Enviar por E-mail"}
            </button>

            <p className={styles.privacyNote}>
              <ShieldCheck size={14} aria-hidden="true" />
              Seus dados são usados exclusivamente para retorno do contato e
              tratados com confidencialidade, em conformidade com a LGPD.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}