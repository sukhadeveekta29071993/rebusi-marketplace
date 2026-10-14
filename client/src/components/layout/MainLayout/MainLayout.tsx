import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
