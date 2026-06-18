import { useNavigate } from "react-router-dom";
import ngoImage from "../assets/images/ngo-banner.jpg";

function LandingPage() {

  const navigate = useNavigate();

  const selectRole = (role) => {

    localStorage.setItem(
      "selectedRole",
      role
    );

    navigate("/register");
  };

  return (

    <div className="container-fluid">

      <div className="row vh-100">

        {/* Left Section */}

        <div
          className="col-md-7 d-flex align-items-center justify-content-center text-white"
          style={{
            background:
              "linear-gradient(135deg,#0d6efd,#198754)"
          }}
        >

          <div className="text-center">

            <img
              src={ngoImage}
              alt="NGO Banner"
              className="img-fluid rounded shadow mb-4"
              style={{
                maxWidth: "500px"
              }}
            />

            <h1 className="fw-bold">
              NGO Donation Management System
            </h1>

            <p className="lead">
              Together We Can Create A Better Tomorrow
            </p>

          </div>

        </div>

        {/* Right Section */}

        <div
          className="col-md-5 d-flex align-items-center"
        >

          <div className="w-100 p-5">

            <h2 className="mb-4 text-center">
              Select Your Role
            </h2>

            <button
              className="btn btn-primary w-100 mb-3"
              onClick={() =>
                selectRole("admin")
              }
            >
              Admin
            </button>

            <button
              className="btn btn-success w-100 mb-3"
              onClick={() =>
                selectRole("ngo")
              }
            >
              NGO Manager
            </button>

            <button
              className="btn btn-warning w-100"
              onClick={() =>
                selectRole("donor")
              }
            >
              Donor
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default LandingPage;