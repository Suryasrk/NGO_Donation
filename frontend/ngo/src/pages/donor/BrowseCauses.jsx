import { useState, useEffect } from "react";
import api from "../../api/axios";

function BrowseCauses() {

const [causes, setCauses] =
useState([]);

const [amounts, setAmounts] =
useState({});

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

const donate = async (
causeId
) => {

try {

  const token =
    localStorage.getItem(
      "token"
    );

  await api.post(

    "donations/",

    {

      cause: causeId,

      amount:
        amounts[causeId],

      transaction_id:
        "TXN" +
        Date.now(),

      status:
        "success"

    },

    {
      headers: {
        Authorization:
          "Bearer " + token
      }
    }

  );

  alert(
    "Donation Successful"
  );

  setAmounts({

    ...amounts,

    [causeId]: ""

  });

  fetchCauses();

}

catch(error){

  console.log(error);

  alert(
    "Donation Failed"
  );

}

};

return (

<div>

  <h2>
    Browse Causes
  </h2>

  <div className="row">

    {causes.map(
      (cause)=>(
      <div
        key={cause.id}
        className="col-md-4"
      >

        <div
          className="card p-3 mb-3"
        >

          <h4>
            {cause.title}
          </h4>

          <p>
            {cause.description}
          </p>

          <p>

            Goal:
            ₹
            {cause.goal_amount}

          </p>

          <p>

            Raised:
            ₹
            {cause.raised_amount}

          </p>

          <input
            type="number"
            placeholder="Enter Amount"
            className="form-control mb-2"
            value={
              amounts[cause.id] || ""
            }
            onChange={(e)=>
              setAmounts({

                ...amounts,

                [cause.id]:
                  e.target.value

              })
            }
          />

          <button
            className="btn btn-success"
            onClick={() =>
              donate(
                cause.id
              )
            }
          >

            Donate

          </button>

        </div>

      </div>
    ))}

  </div>

</div>

);

}

export default BrowseCauses;