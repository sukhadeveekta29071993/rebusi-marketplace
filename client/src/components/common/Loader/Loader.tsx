interface LoaderProps {
  text?: string;
  fullScreen?: boolean;
}

const Loader = ({ text = "Loading...", fullScreen = false }: LoaderProps) => {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center gap-3 ${
        fullScreen ? "min-vh-100" : "py-5"
      }`}
    >
      <div className="spinner-border text-orange" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      {text && <span className="text-muted">{text}</span>}
    </div>
  );
};

export default Loader;
