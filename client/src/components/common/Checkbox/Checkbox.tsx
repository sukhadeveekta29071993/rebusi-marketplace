import type { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  error?: string;
  wrapperClassName?: string;
}

const Checkbox = ({
  label,
  error,
  className = "",
  wrapperClassName = "",
  id,
  ...props
}: CheckboxProps) => {
  const checkboxId = id || props.name;

  return (
    <div className={`form-check ${wrapperClassName}`}>
      <input
        {...props}
        id={checkboxId}
        type="checkbox"
        className={`form-check-input ${error ? "is-invalid" : ""} ${className}`}
      />

      <label className="form-check-label" htmlFor={checkboxId}>
        {label}
      </label>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Checkbox;
