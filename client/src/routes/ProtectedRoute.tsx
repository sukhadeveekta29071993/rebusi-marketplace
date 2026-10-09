import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppSelector } from "../store/hooks";

function ProtectedRoute() {
  const location = useLocation();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
