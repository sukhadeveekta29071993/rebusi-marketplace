import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>
        <div className="bg-dark text-white text-center py-2">ReBusi</div>

        <nav className="navbar navbar-dark bg-dark border-bottom border-secondary">
          <div className="container">
            <span className="navbar-brand fw-bold">ReBusi</span>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <small>© ReBusi. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
