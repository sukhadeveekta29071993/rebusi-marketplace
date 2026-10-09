import { Route, Routes } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";
import AuthLayout from "../components/layout/AuthLayout/AuthLayout";

import Home from "../pages/Home/Home";

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import VerifyEmail from "../pages/Auth/VerifyEmail/VerifyEmail";

import MarketPlace from "../pages/Marketplace/MarketPlace";
import Profile from "../pages/Profile/Profile";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* ================================
          Auth Routes
      ================================= */}

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/verify-email" element={<VerifyEmail />} />
        </Route>
      </Route>

      {/* ================================
          Application Routes
      ================================= */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/marketplace" element={<MarketPlace />} />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
