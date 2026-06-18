import { Link } from "react-router-dom";

function Sidebar() {

  const role =
    localStorage.getItem("role");

  return (

    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#198754",
        color: "white",
        padding: "20px"
      }}
    >

      <h4>
        NGO System
      </h4>

      <hr />

      {role === "admin" && (

        <>
          <Link
            to="/admin-dashboard"
            className="d-block text-white mb-3"
          >
            Dashboard
          </Link>

          <Link
            to="/users"
            className="d-block text-white mb-3"
          >
            Users
          </Link>

          <Link
            to="/reports"
            className="d-block text-white mb-3"
          >
            Reports
          </Link>
        </>

      )}

      {role === "ngo" && (

        <>
          <Link
            to="/ngo-dashboard"
            className="d-block text-white mb-3"
          >
            Dashboard
          </Link>

          <Link
            to="/causes"
            className="d-block text-white mb-3"
          >
            Causes
          </Link>

          <Link
            to="/campaigns"
            className="d-block text-white mb-3"
          >
            Campaigns
          </Link>

          <Link
            to="/events"
            className="d-block text-white mb-3"
          >
            Events
          </Link>
        </>

      )}

      {role === "donor" && (

        <>
          <Link
            to="/donor-dashboard"
            className="d-block text-white mb-3"
          >
            Dashboard
          </Link>

          <Link
            to="/browse-causes"
            className="d-block text-white mb-3"
          >
            Browse Causes
          </Link>

          <Link
            to="/donation-history"
            className="d-block text-white mb-3"
          >
            Donation History
          </Link>
        </>

      )}

    </div>

  );
}

export default Sidebar;