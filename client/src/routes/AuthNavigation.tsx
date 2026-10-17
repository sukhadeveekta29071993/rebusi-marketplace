import { Route } from "react-router-dom";

import AuthLayout from "../components/layout/AuthLayout/AuthLayout";

import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail";
import PublicRoute from "./PublicRoute";

export const getAuthRoutes = () => (
  <Route element={<AuthLayout />}>
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />

    <Route
      path="/register"
      element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      }
    />

    <Route
      path="/forgot-password"
      element={
        <PublicRoute>
          <ForgotPassword />
        </PublicRoute>
      }
    />

    <Route
      path="/verify-email"
      element={
        <PublicRoute>
          <VerifyEmail />
        </PublicRoute>
      }
    />

    <Route
      path="/reset-password"
      element={
        <PublicRoute>
          <ResetPassword />
        </PublicRoute>
      }
    />
  </Route>
);
