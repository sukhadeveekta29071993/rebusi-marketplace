import { useNavigate } from "react-router-dom";

import Button from "../../components/common/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <div className="font-display text-orange fs-1">404</div>

        <h1>Page Not Found</h1>

        <p>The page you are looking for does not exist.</p>

        <Button onClick={() => navigate("/")}>
          <i className="bi bi-house-door me-2" />
          Back to Home
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
