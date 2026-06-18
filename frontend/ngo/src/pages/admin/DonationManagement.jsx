import { useState, useEffect } from "react";
import api from "../../api/axios";

function DonationManagement() {

  const [donations,
    setDonations] =
    useState([]);

  useEffect(() => {

    fetchDonations();

  }, []);

  const fetchDonations =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await api.get(

          "donations/",

          {
            headers:{
              Authorization:
                "Bearer " + token
            }
          }

        );

      setDonations(
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
        Donation Management
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>

            <th>Cause</th>

            <th>Amount</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {donations.map(
            (donation)=>(

            <tr key={donation.id}>

              <td>
                {donation.id}
              </td>

              <td>
                {donation.cause_title}
              </td>

              <td>
                ₹{donation.amount}
              </td>

              <td>
                {donation.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default DonationManagement;