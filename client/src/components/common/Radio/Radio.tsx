import type { InputHTMLAttributes, ReactNode } from "react";

interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  error?: string;
  wrapperClassName?: string;
}

function Radio({
  label,
  error,
  id,
  className = "",
  wrapperClassName = "",
  ...props
}: RadioProps) {
  return (
    <div className={wrapperClassName}>
      <div className="form-check">
        <input
          id={id}
          type="radio"
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

export default Radio;
