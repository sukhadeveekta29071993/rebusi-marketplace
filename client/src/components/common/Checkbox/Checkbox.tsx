import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  error?: string;
  wrapperClassName?: string;
}

function Checkbox({
  label,
  error,
  id,
  className = "",
  wrapperClassName = "",
  ...props
}: CheckboxProps) {
  return (
    <div className={wrapperClassName}>
      <div className="form-check">
        <input
          id={id}
          type="checkbox"
          className={`form-check-input ${
            error ? "is-invalid" : ""
          } ${className}`.trim()}
          {...props}
        />

        <label htmlFor={id} className="form-check-label">
          {label}
        </label>

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
}

export default Checkbox;
