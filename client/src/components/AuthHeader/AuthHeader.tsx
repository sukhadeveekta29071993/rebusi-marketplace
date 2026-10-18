import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

interface AuthHeaderProps {
  compact?: boolean;
  showTagline?: boolean;
  className?: string;
}

const AuthHeader = ({
  compact = false,
  showTagline = true,
  className = "",
}: AuthHeaderProps) => {
  return (
    <Link
      to="/"
      className={`text-decoration-none d-inline-flex flex-column ${
        compact ? "align-items-start" : "align-items-center"
      } ${className}`}
      aria-label="Go to ReBusi home"
    >
      <div className="d-flex align-items-center">
        <img
          src={Logo}
          alt="ReBusi logo"
          width={compact ? 30 : 40}
          height={compact ? 30 : 40}
          className="img-fluid me-2"
        />

        <div className={`fw-bold lh-1 ${compact ? "fs-4" : "fs-3"}`}>
          <span
            style={{
              color: "var(--orange)",
            }}
          >
            Re
          </span>

          <span
            style={{
              color: "var(--white)",
            }}
          >
            Busi
          </span>

          <span
            style={{
              color: "var(--orange)",
            }}
          >
            .
          </span>
        </div>
      </div>

      {showTagline && (
        <span
          className="fw-semibold mt-2"
          style={{
            color: "var(--orange)",
            fontSize: compact ? "11px" : "12px",
          }}
        >
          ReDefine Business, ReClaim India.
        </span>
      )}
    </Link>
  );
};

export default AuthHeader;
