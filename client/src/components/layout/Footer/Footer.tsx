import { Link } from "react-router-dom";
import AuthHeader from "../../AuthHeader/AuthHeader";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{
        backgroundColor: "var(--bg-dark)",
      }}
    >
      <div className="container">
        <div className="row g-4 pb-4">
          <div className="col-12 col-lg-4">
            <AuthHeader />

            <p className="text-white-50 small mb-0">
              Discover, buy, sell and revive businesses through one trusted
              marketplace.
            </p>
          </div>

          {/* marketplace */}

          <div className="col-6 col-md-3 col-lg">
            <h6 className="mb-3 text-white-50">Marketplace</h6>
            <div className="d-flex flex-column gap-2">
              <Link
                to="/marketplace/buy"
                className="text-white-50 text-decoration-none"
              >
                Buy a Business
              </Link>

              <Link
                to="/marketplace/sell"
                className="text-white-50 text-decoration-none"
              >
                Sell a Business
              </Link>

              <Link
                to="/marketplace/franchise"
                className="text-white-50 text-decoration-none"
              >
                Franchises
              </Link>

              <Link
                to="/marketplace/commercial-rentals"
                className="text-white-50 text-decoration-none"
              >
                Commercial rentals
              </Link>
            </div>
          </div>

          {/* services */}

          <div className="col-6 col-md-3 col-lg">
            <h6 className="mb-3 text-white-50">Tools</h6>
            <div className="d-flex flex-column gap-2">
              <Link
                to="/revive/diagnostics"
                className="text-white-50 text-decoration-none"
              >
                Health Diagnostic
              </Link>

              <Link
                to="/finance"
                className="text-white-50 text-decoration-none"
              >
                ReBusi Finance
              </Link>

              <Link
                to="/toolkit"
                className="text-white-50 text-decoration-none"
              >
                Toolkit Library
              </Link>

              <Link
                to="/consult/find"
                className="text-white-50 text-decoration-none"
              >
                Find a Consultant
              </Link>
            </div>
          </div>

          {/* company */}

          <div className="col-6 col-md-3 col-lg">
            <h6 className="mb-3 text-white-50">Company</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/about" className="text-white-50 text-decoration-none">
                About ReBusi
              </Link>

              <Link
                to="/mission"
                className="text-white-50 text-decoration-none"
              >
                Our Mission
              </Link>

              <Link
                to="/careers"
                className="text-white-50 text-decoration-none"
              >
                Careers
              </Link>

              <Link
                to="/contact"
                className="text-white-50 text-decoration-none"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* resources */}

          <div className="col-6 col-md-3 col-lg">
            <h6 className="mb-3 text-white-50">Resources</h6>
            <div className="d-flex flex-column gap-2">
              <Link
                to="/how-it-works"
                className="text-white-50 text-decoration-none"
              >
                How it works
              </Link>

              <Link
                to="/trust-safety"
                className="text-white-50 text-decoration-none"
              >
                Trust & Safety
              </Link>

              <Link to="/help" className="text-white-50 text-decoration-none">
                Help Center
              </Link>
            </div>
          </div>
        </div>

        <div className="border-top pt-4 mt-2 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 small text-white-50">
          <span className="d-flex gap-1">
            <i className="bi bi-at"></i>
            {currentYear} ReBusi. All rights reserved.
          </span>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link
              to="/privacy-policy"
              className="text-white text-decoration-none small"
            >
              Privacy Policy
            </Link>

            <Link to="/terms" className="text-white text-decoration-none small">
              Terms of Service
            </Link>

            <Link
              to="/fee-schedule"
              className="text-white text-decoration-none small"
            >
              Fee Schedule
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
