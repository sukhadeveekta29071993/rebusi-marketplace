import type { ReactNode } from "react";
import { useAppSelector } from "../store/hooks";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ form: location.pathname }} />;
  }
  return children;
};

export default ProtectedRoute;
