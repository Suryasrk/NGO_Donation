import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BrowseCauses from "./BrowseCauses";
import DonationHistory from "./DonationHistory";
import Profile from "./Profile";

function DonorDashboard() {

const [activeTab, setActiveTab] =
useState("dashboard");

const navigate = useNavigate();

const logout = () => {

localStorage.removeItem("token");
localStorage.removeItem("role");
localStorage.removeItem("username");

navigate("/login");

};

return (

<div className="container-fluid">

  <div className="row">

    {/* Sidebar */}

    <div className="col-md-2 sidebar d-flex flex-column">

      <h3 className="text-center mt-4">
        Donor Panel
      </h3>

      <hr />

      <button
        className={
          activeTab === "dashboard"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("dashboard")
        }
      >
        Dashboard
      </button>

      <button
        className={
          activeTab === "causes"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("causes")
        }
      >
        Browse Causes
      </button>

      <button
        className={
          activeTab === "history"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("history")
        }
      >
        Donation History
      </button>

      <button
        className={
          activeTab === "profile"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("profile")
        }
      >
        Profile
      </button>

      <div className="mt-auto mb-3">

        <button
          className="btn btn-danger w-100"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

    {/* Content */}

    <div className="col-md-10 p-4">

      {activeTab === "dashboard" && (

        <div>

          <h2>
            Welcome Donor
          </h2>

          <p>
            Browse causes and make donations.
          </p>

        </div>

      )}

      {activeTab === "causes" && (
        <BrowseCauses />
      )}

      {activeTab === "history" && (
        <DonationHistory />
      )}

      {activeTab === "profile" && (
        <Profile />
      )}

    </div>

  </div>

</div>

);

}

export default DonorDashboard;