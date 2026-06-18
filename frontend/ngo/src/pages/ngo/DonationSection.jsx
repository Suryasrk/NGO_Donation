import { useState, useEffect } from "react";
import api from "../../api/axios";

function DonationSection() {

  const [donations, setDonations] =
    useState([]);

  useEffect(() => {

    fetchDonations();

  }, []);

  const fetchDonations = async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await api.get(

          "donations/",

          {
            headers: {
              Authorization:
                "Bearer " + token
            }
          }

        );

      setDonations(
        response.data
      );

    }

    catch (error) {

      console.log(error);

      alert(
        "Error Fetching Donations"
      );

    }

  };

  return (

    <div>

      <h2>
        Donation Management
      </h2>

      <hr />

      <div className="row mb-4">

        <div className="col-md-4">

          <div className="card p-3 text-center">

            <h3>
              {donations.length}
            </h3>

            <p>
              Total Donations
            </p>

          </div>

        </div>

      </div>

      <table
        className="table table-bordered table-striped"
      >

        <thead className="table-dark">

          <tr>

            <th>ID</th>

            <th>Cause</th>

            <th>Amount</th>

            <th>Status</th>

            <th>Transaction ID</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {donations.length > 0 ? (

            donations.map(
              (donation) => (

                <tr
                  key={donation.id}
                >

                  <td>
                    {donation.id}
                  </td>

                  <td>
                    {donation.cause}
                  </td>

                  <td>
                    ₹
                    {donation.amount}
                  </td>

                  <td>
                    {donation.status}
                  </td>

                  <td>
                    {
                      donation.transaction_id
                    }
                  </td>

                  <td>
                    {
                      donation.donated_at
                    }
                  </td>

                </tr>

              )
            )

          ) : (

            <tr>

              <td
                colSpan="6"
                className="text-center"
              >

                No Donations Found

              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default DonationSection;