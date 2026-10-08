import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  helperText?: string;
}

function Input({
  label,
  error,
  id,
  className = "",
  wrapperClassName = "",
  helperText,
  required,
  ...props
}: InputProps) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}

          {required && <span className="text-danger ms-1">*</span>}
        </label>
      )}

      <input
        id={id}
        required={required}
        className={`form-control ${
          error ? "is-invalid" : ""
        } ${className}`.trim()}
        {...props}
      />

      {error && <div className="invalid-feedback">{error}</div>}

      {!error && helperText && <div className="form-text">{helperText}</div>}
    </div>
  );
}

export default Input;
