import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(function Button(
  { children, variant = "primary", size, as = "button", type, className = "", ...props },
  ref
) {
  const classes = [
    styles.button,
    styles[variant],
    size === "large" ? styles.large : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (as === "a") {
    return (
      <a ref={ref} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
