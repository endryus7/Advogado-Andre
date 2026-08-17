import { forwardRef } from "react";
import styles from "./Button.module.css";

// forwardRef permite passar ref direto pro <a> ou <button> renderizado
const Button = forwardRef(function Button(
  { children, variant = "primary", size, as = "button", type, className = "", ...props },
  ref,
) {
  // Monta a lista de classes dinamicamente: base + variante + tamanho opcional + classes externas
  const classes = [
    styles.button,
    styles[variant], // ex: primary, accent, outline, ghostLight
    size === "large" ? styles.large : "",
    className,
  ]
    .filter(Boolean) // remove strings vazias antes de juntar
    .join(" ");

  if (as === "a") {
    return (
      <a ref={ref} className={classes} {...props}>
        {children}
      </a>
    );
  }

  // renderiza <button>, com type "button" por padrão
  return (
    <button ref={ref} type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
