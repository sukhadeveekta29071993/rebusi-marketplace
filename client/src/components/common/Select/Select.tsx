import type { ReactNode, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children: ReactNode;
  wrapperClassName?: string;
}

function Select({
  label,
  error,
  id,
  children,
  className = "",
  wrapperClassName = "mb-3",
  required,
  ...props
}: SelectProps) {
  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}

          {required && <span className="text-danger ms-1">*</span>}
        </label>
      )}

      <select
        id={id}
        required={required}
        className={`form-select ${
          error ? "is-invalid" : ""
        } ${className}`.trim()}
        {...props}
      >
        {children}
      </select>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default Select;
