import { Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout/MainLayout";

import BusinessHealth from "../pages/BusinessHealth/BusinessHealth";
import BuyBusiness from "../pages/BuyBusiness/BuyBusiness";
import CommercialRental from "../pages/CommercialRental/CommercialRental";
import Consultants from "../pages/Consultants/Consultants";
import Finance from "../pages/Finance/Finance";
import Franchise from "../pages/Franchise/Franchise";
import Home from "../pages/Home/Home";
import Marketplace from "../pages/Marketplace/Marketplace";
import Profile from "../pages/Profile/Profile";
import SellBusiness from "../pages/SellBusiness/SellBusiness";
import ProtectedRoute from "./ProtectedRoute";

export const getAppRoutes = () => (
  <Route element={<MainLayout />}>
    <Route index element={<Home />} />

    <Route path="/marketplace" element={<Marketplace />} />

    <Route path="/buy-business" element={<BuyBusiness />} />

    <Route path="/sell-business" element={<SellBusiness />} />

    <Route path="/business-health" element={<BusinessHealth />} />

    <Route path="/consultants" element={<Consultants />} />

    <Route path="/finance" element={<Finance />} />

    <Route path="/franchise" element={<Franchise />} />

    <Route path="/commercial-rental" element={<CommercialRental />} />

    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Route>
);
