import { Route } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout/AuthLayout";

import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail";

export const getAuthRoutes = () => (
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route path="/forgot-password" element={<ForgotPassword />} />

    <Route path="/verify-email" element={<VerifyEmail />} />

    <Route path="/reset-password" element={<ResetPassword />} />
  </Route>
);
