import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Card from "../../components/common/Card/Card";
import Button from "../../components/common/Button/Button";
import { logout } from "../../feature/auth/slices/authSlice";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  if (!user) {
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <Card className="shadow-lg">
              <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
                <div className="d-flex align-items-center gap-3">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      width={72}
                      height={72}
                      className="rounded-circle object-fit-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center fs-3.fw-bold"
                      style={{
                        width: 72,
                        height: 72,
                        backgroundColor: "var(--orange-light)",
                        color: "var(--orange)",
                      }}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h1 className="mb-1 h3">{user.name}</h1>
                    <p className="text-muted mb-0">Rebusi Account</p>
                  </div>
                </div>

                <Button type="button" variant="outline" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </Button>
              </div>
              <hr className="my-4" />
              <div className="row g-4">
                <div className="col-md-6">
                  <small className="text-muted d-block mb-1">Email</small>
                  <div className="fw-semibold">{user.email}</div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted d-block mb-1">
                    Mobile Number
                  </small>
                  <div className="fw-semibold">
                    {user.phone ? `+91 ${user.phone}` : "Not provided"}
                  </div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted d-block mb-1">
                    Sign-in Method
                  </small>
                  <div className="fw-semibold text-capitalize">
                    {user.provider === "google"
                      ? "Google"
                      : "Email / Mobile OTP"}
                  </div>
                </div>
                <div className="col-md-6">
                  <small className="text-muted d-block mb-1">Role</small>
                  <div className="fw-semibold text-capitalize">{user.role}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
