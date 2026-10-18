import { Link } from "react-router-dom";
import Badge from "../../common/Badge/Badge";
import Button from "../../common/Button/Button";

interface AnnounceMentBarProps {
  visible: boolean;
  onClose: () => void;
}
const AnnouncementBar = ({ visible, onClose }: AnnounceMentBarProps) => {
  if (!visible) {
    return null;
  }
  return (
    <div
      className="position-fixed top-0 start-0 w-100 d-flex align-items-center justify-content-center px-3 text-white rounded-pill"
      style={{
        backgroundColor: "var(--black)",
        height: "40px",
        zIndex: 1100,
      }}
    >
      <div className="d-flex align-item-center justify-content-center gap-2 gap-md-3 small pe-4">
        <Badge variant="orange">New</Badge>
        <span className="d-none d-sm-flex align-items-center gap-1 text-white">
          Business Health Diagnostic now live
          <i className="bi bi-dash" />
        </span>
        <Link
          to="/revive/diagnostics"
          className="text-decoration-none text-white fw-semibold d-flex align-items-center gap-2"
        >
          Check your score free
          <i className="bi bi-arrow-right" />
        </Link>
        <Button
          type="button"
          className="btn position-absolute end-0 me-3 p-0 border-0 text-white"
          onClick={onClose}
        >
          <i className="bi bi-x-lg"></i>
        </Button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
