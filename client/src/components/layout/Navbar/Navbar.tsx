import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../../feature/auth/slices/authSlice";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import AuthHeader from "../../AuthHeader/AuthHeader";
import Button from "../../common/Button/Button";

interface NavbarProps {
  isScrolled: boolean;
  navbarTop: string;
}

const Navbar = ({ isScrolled, navbarTop }: NavbarProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const userName = user?.name ?? "User";
  const userInitial = user?.name?.charAt(0).toUpperCase() ?? "U";

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <header
      className="position-fixed start-0 w-100"
      style={{
        top: navbarTop,
        zIndex: 1100,
        transition: "top 0.3s ease",
      }}
    >
      <nav
        className={`navbar navbar-expand-lg rounded-3 ${isScrolled ? "shadow-lg" : ""}`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(17, 24, 39, 0.75)"
            : "var(--navy)",

          backdropFilter: isScrolled ? "blur(12px)" : "none",

          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="container-fluid px-1 px-lg-3">
          {/* logo */}
          <AuthHeader compact className="navbar-brand mb-0" />

          {/* Mobile Toggle */}
          <Button
            type="button"
            className="navbar-toggler border-0 shadow-none"
            data-bs-toggle="collapse"
            data-bs-target="#rebusiNavbar"
            aria-controls="rebusiNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-2 text-white"></i>
          </Button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="rebusiNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              {/* marketplace */}

              <li className="nav-item dropdown d-lg-flex align-items lg-center">
                <Link
                  to="/marketplace"
                  className="nav-link.text-white d-inline-block"
                >
                  Marketplace
                </Link>
                <Button
                  type="button"
                  className="border-0 bg-transparent p-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="open marketplace menu"
                >
                  <i className="bi bi-chevron-down small text-white"></i>
                </Button>
                <ul className="dropdown-menu shadow-lg border-0">
                  <li>
                    <h6 className="dropdown-header">Transect</h6>
                  </li>
                  <li>
                    <Link to="/marketplace/buy" className="dropdown-item">
                      <i className="bi bi-shop me-2"></i>
                      Buy a Business
                    </Link>
                  </li>
                  <li>
                    <Link to="/marketplace/sell" className="dropdown-item">
                      <i className="bi bi-briefcase me-2"></i>
                      Sell a Business
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <h6 className="dropdown-header">More</h6>
                  </li>
                  <li>
                    <Link to="/marketplace/franchise" className="dropdown-item">
                      <i className="bi bi-people me-2"></i>
                      Franchise Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/marketplace/commercial-rentals"
                      className="dropdown-item"
                    >
                      <i className="bi bi-building me-2"></i>
                      Commercial Rentals
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Revive */}

              <li className="nav-item dropdown d-lg-flex align-items-lg-center">
                <Link
                  to="/revive"
                  className="nav-link text-white d-inline-block"
                >
                  Revive
                </Link>

                <button
                  type="button"
                  className="btn border-0 bg-transparent p-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Open revive menu"
                >
                  <i className="bi bi-chevron-down text-white small" />
                </button>

                <ul
                  className="dropdown-menu shadow border-0"
                  style={{
                    backgroundColor: "var(--dropdown-bg)",
                  }}
                >
                  <li>
                    <h6 className="dropdown-header">Business Turnaround</h6>
                  </li>

                  <li>
                    <Link to="/revive/distressed" className="dropdown-item">
                      <i className="bi bi-fire me-2" />
                      Distressed Business Revival
                    </Link>
                  </li>

                  <li>
                    <Link to="/revive/diagnostics" className="dropdown-item">
                      <i className="bi bi-bar-chart-line me-2" />
                      Business Diagnostics
                    </Link>
                  </li>

                  <li>
                    <Link to="/revive/restructuring" className="dropdown-item">
                      <i className="bi bi-lightbulb me-2" />
                      Restructuring Advisory
                    </Link>
                  </li>
                </ul>
              </li>

              {/* consult */}

              <li className="nav-item dropdown d-lg-flex align-items-lg-center">
                <Link
                  to="/consult"
                  className="nav-link text-white d-inline-block"
                >
                  Consult
                </Link>

                <button
                  type="button"
                  className="btn border-0 bg-transparent p-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Open consult menu"
                >
                  <i className="bi bi-chevron-down text-white small" />
                </button>

                <ul
                  className="dropdown-menu shadow border-0"
                  style={{
                    backgroundColor: "var(--dropdown-bg)",
                  }}
                >
                  <li>
                    <h6 className="dropdown-header">Expert Network</h6>
                  </li>

                  <li>
                    <Link to="/consult/find" className="dropdown-item">
                      <i className="bi bi-person-badge me-2" />
                      Find a Consultant
                    </Link>
                  </li>

                  <li>
                    <Link to="/consult/legal" className="dropdown-item">
                      <i className="bi bi-scale me-2" />
                      CA & Legal Partners
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link to="/consult/join" className="dropdown-item">
                      <i className="bi bi-mortarboard me-2" />
                      Join as a Consultant
                    </Link>
                  </li>
                </ul>
              </li>

              {/* finance */}

              <li className="nav-item dropdown d-lg-flex align-items-lg-center">
                <Link
                  to="/finance"
                  className="nav-link text-white d-inline-block"
                >
                  Finance
                </Link>

                <button
                  type="button"
                  className="btn border-0 bg-transparent p-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Open finance menu"
                >
                  <i className="bi bi-chevron-down text-white small" />
                </button>

                <ul
                  className="dropdown-menu shadow border-0"
                  style={{
                    backgroundColor: "var(--dropdown-bg)",
                  }}
                >
                  <li>
                    <h6 className="dropdown-header">Funding & Capital</h6>
                  </li>

                  <li>
                    <Link to="/finance/acquisition" className="dropdown-item">
                      <i className="bi bi-bank me-2" />
                      Acquisition Finance
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/finance/working-capital"
                      className="dropdown-item"
                    >
                      <i className="bi bi-graph-up-arrow me-2" />
                      Working Capital
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/finance/investor-connect"
                      className="dropdown-item"
                    >
                      <i className="bi bi-cash-coin me-2" />
                      Investor Connect
                    </Link>
                  </li>
                </ul>
              </li>

              {/* toolkit */}

              <li className="nav-item dropdown d-lg-flex align-items-lg-center">
                <Link
                  to="/toolkit"
                  className="nav-link text-white d-inline-block"
                >
                  Toolkit
                </Link>

                <button
                  type="button"
                  className="btn border-0 bg-transparent p-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Open toolkit menu"
                >
                  <i className="bi bi-chevron-down text-white small" />
                </button>

                <ul
                  className="dropdown-menu shadow border-0"
                  style={{
                    backgroundColor: "var(--dropdown-bg)",
                  }}
                >
                  <li>
                    <h6 className="dropdown-header">Toolkit Library</h6>
                  </li>

                  <li>
                    <Link to="/toolkit/templates" className="dropdown-item">
                      <i className="bi bi-journal-bookmark me-2" />
                      Browse All Templates
                    </Link>
                  </li>

                  <li>
                    <Link to="/toolkit/flagship-kits" className="dropdown-item">
                      <i className="bi bi-bullseye me-2" />
                      Flagship Kits
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/toolkit/complete-bundle"
                      className="dropdown-item"
                    >
                      <i className="bi bi-gift me-2" />
                      Complete Bundle
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <h6 className="dropdown-header">Popular Picks</h6>
                  </li>

                  <li>
                    <Link
                      to="/toolkit/seller-readiness"
                      className="dropdown-item"
                    >
                      <i className="bi bi-handshake me-2" />
                      Seller Readiness Kit
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/toolkit/marketing-sales"
                      className="dropdown-item"
                    >
                      <i className="bi bi-megaphone me-2" />
                      Marketing & Sales Templates
                    </Link>
                  </li>
                </ul>
              </li>

              {/* insights */}

              <li className="nav-item d-flex align-items-center">
                <Link to="/insights" className="nav-link text-white">
                  Insights
                </Link>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
              {/* notification */}

              {isAuthenticated && (
                <Button
                  type="button"
                  className="btn border-0 bg-transparent position-relative p-2 align-self-start align-self-lg-center "
                  aria-label="notification"
                >
                  <i className="bi bi-bell fs-5 text-white"></i>
                  <span className="position-absolute top-0 start-100 translate-middle p-1 border border-light bg-danger rounded-circle">
                    <span className="visually-hidden">New Notification</span>
                  </span>
                </Button>
              )}

              {/* username */}
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="btn d-inline-flex align-items-center justify-content-center text-decoration-none rounded-2 px-3 py-2 border border-secondary text-white bg-transparent"
                >
                  <i className="bi bi-person me-2" />
                  Sign In
                </Link>
              ) : (
                <div className="dropdown">
                  <Button
                    type="button"
                    className="btn d-flex-align-items-center.gap-2 text-white rounded-2 py-2 px-3 border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* google avatar / user initial */}
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={userName}
                        width={32}
                        height={32}
                        className="rounded-circle object-fit-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span
                        className="rounded-circle d-flex align-items-center justify-content-center fw-semibold text-white"
                        style={{
                          width: "32px",
                          height: "32px",
                          backgroundColor: "var(--orange)",
                        }}
                      >
                        {userInitial}
                      </span>
                    )}
                    <span className="d-none d-xl-inline">{userName}</span>
                    <i className="bi bi-chevron-down small"></i>
                  </Button>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow-lg border-0 mt-3"
                    style={{
                      backgroundColor: "var(--dropdown-bg)",
                      width: "300px",
                    }}
                  >
                    <li>
                      <div className="dropdown-header">
                        <div className="d-flex align-items-center gap-2">
                          {user?.avatar ? (
                            <img
                              src={user.avatar}
                              alt={userName}
                              width={36}
                              height={36}
                              className="rounded-circle object-fit-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span
                              className="rounded-circle d-flex align-items-center fw-semibold text-white"
                              style={{
                                width: "36px",
                                height: "36px",
                                backgroundColor: "var(--orange)",
                              }}
                            >
                              {userInitial}
                            </span>
                          )}
                          <div className="min-width-0 overflow-hidden">
                            <div className="fw-semibold text-dark text-truncate text-capitalize">
                              {userName}
                            </div>

                            <small className="text-secondary d-block text-break">
                              {user?.email ?? ""}
                            </small>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    {/* profile */}
                    <li>
                      <Link
                        to="/profile"
                        className="dropdown-item d-flex align-items0center gap-2 py-2"
                      >
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                      </Link>
                    </li>

                    {/* Dashboard */}
                    <li>
                      <Link
                        to="/dashboard"
                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                      >
                        <i className="bi bi-speedometer2"></i>
                        <span>Dashboard</span>
                      </Link>
                    </li>

                    {/* divider */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* logout */}
                    <li>
                      <Button
                        type="button"
                        className="dropdown-item d-flex align-items0center gap-2 py-2 text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right"></i>
                        <span>Logout</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
