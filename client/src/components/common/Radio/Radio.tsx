import type { InputHTMLAttributes, ReactNode } from "react";

interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  error?: string;
}

const Radio = ({ label, error, className = "", id, ...props }: RadioProps) => {
  return (
    <div>
      <div className="form-check">
        <input
          {...props}
          id={id}
          type="radio"
          className={`form-check-input ${error ? "is-invalid" : ""} ${className}`}
        />

        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>

      {error && <div className="text-danger small mt-1">{error}</div>}
    </div>
  );
};

export default Radio;
