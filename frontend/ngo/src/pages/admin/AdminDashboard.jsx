import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserManagement from "./UserManagement";
import AdminAnalytics from "./AdminAnalytics";
import CauseManagement from "./CauseManagement";
import DonationManagement from "./DonationManagement";

function AdminDashboard() {

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

          <h2 className="text-center mt-4">
            Admin Panel
          </h2>

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
              activeTab === "users"
                ? "btn btn-primary w-100 mb-2"
                : "btn btn-secondary w-100 mb-2"
            }
            onClick={() =>
              setActiveTab("users")
            }
          >
            Users
          </button>

          <button
            className={
              activeTab === "analytics"
                ? "btn btn-primary w-100 mb-2"
                : "btn btn-secondary w-100 mb-2"
            }
            onClick={() =>
              setActiveTab("analytics")
            }
          >
            Analytics
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
            Causes
          </button>

          <button
            className={
              activeTab === "donations"
                ? "btn btn-primary w-100 mb-2"
                : "btn btn-secondary w-100 mb-2"
            }
            onClick={() =>
              setActiveTab("donations")
            }
          >
            Donations
          </button>

          {/* Logout Bottom */}

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
                Admin Dashboard
              </h2>

              <p>
                Welcome Admin
              </p>

            </div>

          )}

          {activeTab === "users" && (
            <UserManagement />
          )}

          {activeTab === "analytics" && (
            <AdminAnalytics />
          )}

          {activeTab === "causes" && (
            <CauseManagement />
          )}

          {activeTab === "donations" && (
            <DonationManagement />
          )}

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;