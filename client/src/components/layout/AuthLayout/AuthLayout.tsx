import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main
      className="min-vh-100 d-flex align-items center py-5"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <div className="container">
        <Outlet />
      </div>
    </main>
  );
};
export default AuthLayout;
