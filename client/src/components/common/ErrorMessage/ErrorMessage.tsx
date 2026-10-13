interface ErrorMessageProps {
  message?: string;
}

function ErrorMessage({
  message = "Something went wrong. Please try again.",
}: ErrorMessageProps) {
  return (
    <div className="alert alert-danger" role="alert">
      <i className="bi bi-exclamation-triangle me-2" />
      {message}
    </div>
  );
}

export default ErrorMessage;
