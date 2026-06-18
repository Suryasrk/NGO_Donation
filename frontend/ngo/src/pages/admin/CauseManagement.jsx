import { useState, useEffect } from "react";
import api from "../../api/axios";

function CauseManagement() {

  const [causes, setCauses] =
    useState([]);

  useEffect(() => {

    fetchCauses();

  }, []);

  const fetchCauses = async () => {

    try {

      const response =
        await api.get("causes/");

      setCauses(
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
        Cause Management
      </h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Goal</th>
            <th>Raised</th>

          </tr>

        </thead>

        <tbody>

          {causes.map((cause)=>(

            <tr key={cause.id}>

              <td>{cause.id}</td>

              <td>{cause.title}</td>

              <td>{cause.category}</td>

              <td>
                ₹{cause.goal_amount}
              </td>

              <td>
                ₹{cause.raised_amount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default CauseManagement;