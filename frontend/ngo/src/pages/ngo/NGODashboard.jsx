import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CauseSection from "./CauseSection";
import CampaignSection from "./CampaignSection";
import EventSection from "./EventSection";
import DonationSection from "./DonationSection";
import ReportSection from "./ReportSection";

function NGODashboard() {

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
        NGO Panel
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
        Causes
      </button>

      <button
        className={
          activeTab === "campaigns"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("campaigns")
        }
      >
        Campaigns
      </button>

      <button
        className={
          activeTab === "events"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("events")
        }
      >
        Events
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

      <button
        className={
          activeTab === "reports"
            ? "btn btn-primary w-100 mb-2"
            : "btn btn-secondary w-100 mb-2"
        }
        onClick={() =>
          setActiveTab("reports")
        }
      >
        Reports
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
            NGO Dashboard
          </h2>

          <div className="row mt-4">

            <div className="col-md-4">

              <div className="dashboard-card">

                <h3>
                  Causes
                </h3>

                <p>
                  Manage NGO Causes
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="dashboard-card">

                <h3>
                  Campaigns
                </h3>

                <p>
                  Manage Campaigns
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="dashboard-card">

                <h3>
                  Donations
                </h3>

                <p>
                  Track Donations
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

      {activeTab === "causes" && (
        <CauseSection />
      )}

      {activeTab === "campaigns" && (
        <CampaignSection />
      )}

      {activeTab === "events" && (
        <EventSection />
      )}

      {activeTab === "donations" && (
        <DonationSection />
      )}

      {activeTab === "reports" && (
        <ReportSection />
      )}

    </div>

  </div>

</div>

);

}

export default NGODashboard;