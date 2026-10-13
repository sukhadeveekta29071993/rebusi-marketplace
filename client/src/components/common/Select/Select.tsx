import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = ({
  label,
  error,
  options,
  placeholder,
  id,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label fw-semibold">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`form-select ${
          error ? "is-invalid" : ""
        } ${className}`.trim()}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Select;
