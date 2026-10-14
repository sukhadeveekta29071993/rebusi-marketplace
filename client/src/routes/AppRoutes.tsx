import { Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";

import { getAppRoutes } from "./AppNavigation";
import { getAuthRoutes } from "./AuthNavigation";

const AppRoutes = () => {
  return (
    <Routes>
      {getAuthRoutes()}

      {getAppRoutes()}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
