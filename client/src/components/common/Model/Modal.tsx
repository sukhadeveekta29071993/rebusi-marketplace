import type { ReactNode } from "react";

type ModalSize = "sm" | "md" | "lg";

interface ModalProps {
  show: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
  size?: ModalSize;
}

const Modal = ({ show, title, children, onClose, size = "md" }: ModalProps) => {
  if (!show) {
    return null;
  }

  const modalWidths: Record<ModalSize, string> = {
    sm: "400px",
    md: "600px",
    lg: "800px",
  };

  return (
    <div className="custom-modal-backdrop" onMouseDown={onClose}>
      <div
        className="custom-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "common-modal-title" : undefined}
        style={{
          maxWidth: modalWidths[size],
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="d-flex align-items-center justify-content-between border-bottom p-4">
          {title && (
            <h5 id="common-modal-title" className="mb-0">
              {title}
            </h5>
          )}

          <button
            type="button"
            className="btn-close ms-auto"
            aria-label="Close"
            onClick={onClose}
          />
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
