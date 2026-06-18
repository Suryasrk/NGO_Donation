import { useState, useEffect } from "react";
import api from "../../api/axios";

function AdminAnalytics() {

  const [analytics, setAnalytics] =
    useState({});

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await api.get(

          "analytics/",

          {
            headers: {
              Authorization:
                "Bearer " + token
            }
          }

        );

      setAnalytics(
        response.data
      );

    }

    catch(error){

      console.log(error);

    }

  };

  return (

    <div>

      <h2>
        Admin Analytics
      </h2>

      <div className="row">

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              {analytics.total_users}
            </h3>

            <p>
              Total Users
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              {analytics.total_ngos}
            </h3>

            <p>
              NGOs
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              {analytics.total_donors}
            </h3>

            <p>
              Donors
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              {analytics.total_causes}
            </h3>

            <p>
              Causes
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              {analytics.total_donations}
            </h3>

            <p>
              Donations
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-4 text-center mb-3">

            <h3>
              ₹
              {analytics.total_amount}
            </h3>

            <p>
              Amount Raised
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminAnalytics;