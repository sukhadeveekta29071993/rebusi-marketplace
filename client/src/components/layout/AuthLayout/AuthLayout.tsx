import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="min-vh-100 bg-dark-custom">
      <Outlet />
    </main>
  );
}

export default AuthLayout;
