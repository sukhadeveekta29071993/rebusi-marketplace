import type { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea = ({
  label,
  error,
  id,
  className = "",
  ...props
}: TextAreaProps) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label fw-semibold">
          {label}
        </label>
      )}

      <textarea
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

export default TextArea;
