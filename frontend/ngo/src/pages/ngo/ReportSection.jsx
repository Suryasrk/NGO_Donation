import { useState, useEffect } from "react";
import api from "../../api/axios";

function ReportSection() {

  const [report, setReport] =
    useState({});

  const [recentDonations,
    setRecentDonations] =
    useState([]);

  useEffect(() => {

    fetchReport();

    fetchRecentDonations();

  }, []);

  const fetchReport =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await api.get(

          "reports/",

          {
            headers: {
              Authorization:
                "Bearer " + token
            }
          }

        );

      setReport(
        response.data
      );

    }

    catch(error){

      console.log(error);

    }

  };

  const fetchRecentDonations =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await api.get(

          "recent-donations/",

          {
            headers:{
              Authorization:
                "Bearer " + token
            }
          }

        );

      setRecentDonations(
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
        Reports Dashboard
      </h2>

      <div className="row mt-4">

        <div className="col-md-2">

          <div className="card p-3 text-center">

            <h4>
              {report.total_causes}
            </h4>

            <p>
              Causes
            </p>

          </div>

        </div>

        <div className="col-md-2">

          <div className="card p-3 text-center">

            <h4>
              {report.total_campaigns}
            </h4>

            <p>
              Campaigns
            </p>

          </div>

        </div>

        <div className="col-md-2">

          <div className="card p-3 text-center">

            <h4>
              {report.total_events}
            </h4>

            <p>
              Events
            </p>

          </div>

        </div>

        <div className="col-md-2">

          <div className="card p-3 text-center">

            <h4>
              {report.total_donations}
            </h4>

            <p>
              Donations
            </p>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card p-3 text-center">

            <h4>
              ₹
              {
                report.total_amount_raised
              }
            </h4>

            <p>
              Amount Raised
            </p>

          </div>

        </div>

      </div>

      <hr />

      <h3>
        Recent Donations
      </h3>

      <table
        className="table table-bordered"
      >

        <thead>

          <tr>

            <th>Donor</th>

            <th>Cause</th>

            <th>Amount</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {recentDonations.map(
            (donation,index)=>(
            <tr key={index}>

              <td>
                {donation.donor}
              </td>

              <td>
                {donation.cause}
              </td>

              <td>
                ₹
                {donation.amount}
              </td>

              <td>
                {donation.date}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}

export default ReportSection;