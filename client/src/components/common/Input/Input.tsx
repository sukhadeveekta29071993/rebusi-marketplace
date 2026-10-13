import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, id, className = "", ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label fw-semibold">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`form-control ${
          error ? "is-invalid" : ""
        } ${className}`.trim()}
        {...props}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
