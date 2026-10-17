import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo.png";

const AuthHeader = () => {
  return (
    <Link
      to="/"
      className="text-decoration-none d-inline-block mb-2"
      aria-label="Go to ReBusi home"
    >
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={Logo}
          alt="ReBusi logo"
          className="img-fluid me-2"
          width={30}
          height={30}
        />

        <span className="fw-bold fs-3">
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
        </span>
      </div>

      <span
        className="fw-semibold"
        style={{
          color: "var(--orange)",
        }}
      >
        ReDefine Business, ReClaim India.
      </span>
    </Link>
  );
};

export default AuthHeader;
