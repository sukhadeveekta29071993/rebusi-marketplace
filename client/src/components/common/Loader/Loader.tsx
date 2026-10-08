interface LoaderProps {
  text?: string;
  inline?: boolean;
  size?: "sm" | "md";
}

function Loader({
  text = "Loading...",
  inline = false,
  size = "md",
}: LoaderProps) {
  const spinnerClass =
    size === "sm" ? "spinner-border spinner-border-sm" : "spinner-border";

  if (inline) {
    return (
      <>
        <span
          className={`${spinnerClass} me-2`}
          role="status"
          aria-hidden="true"
        />

        {text}
      </>
    );
  }

  return (
    <div className="text-center py-4">
      <div
        className={`${spinnerClass} text-warning`}
        role="status"
        aria-label={text}
      >
        <span className="visually-hidden">{text}</span>
      </div>

      {text && <p className="mt-2 mb-0">{text}</p>}
    </div>
  );
}

export default Loader;
