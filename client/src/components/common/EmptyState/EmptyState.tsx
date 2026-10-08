import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: string;
  action?: ReactNode;
}

function EmptyState({
  title = "No Data Found",
  message = "There is nothing to display.",
  icon = "bi-inbox",
  action,
}: EmptyStateProps) {
  return (
    <div className="text-center py-5">
      <i className={`bi ${icon} fs-1 text-muted`} aria-hidden="true" />

      <h3 className="mt-3">{title}</h3>

      <p className="text-muted">{message}</p>

      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

export default EmptyState;
