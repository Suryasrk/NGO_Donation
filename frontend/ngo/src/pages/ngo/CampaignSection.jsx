import { useState, useEffect } from "react";
import api from "../../api/axios";

function CampaignSection() {

const [campaigns, setCampaigns] =
useState([]);

const [causes, setCauses] =
useState([]);

const [formData, setFormData] =
useState({
title: "",
description: "",
cause: "",
target_amount: "",
status: "active",
image: null
});

useEffect(() => {

fetchCampaigns();
fetchCauses();

}, []);

const fetchCampaigns = async () => {

try {

  const response =
    await api.get("campaigns/");

  setCampaigns(
    response.data
  );

}

catch(error){

  console.log(error);

}

};

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

const handleChange = (e) => {

setFormData({

  ...formData,

  [e.target.name]:
  e.target.value

});

};

const handleImage = (e) => {

setFormData({

  ...formData,

  image:
  e.target.files[0]

});

};

const createCampaign =
async (e) => {

e.preventDefault();

try {

  const token =
    localStorage.getItem(
      "token"
    );

  const data =
    new FormData();

  data.append(
    "title",
    formData.title
  );

  data.append(
    "description",
    formData.description
  );

  data.append(
    "cause",
    formData.cause
  );

  data.append(
    "target_amount",
    formData.target_amount
  );

  data.append(
    "status",
    formData.status
  );

  if(formData.image){

    data.append(
      "image",
      formData.image
    );

  }

  await api.post(

    "campaigns/",

    data,

    {
      headers:{
        Authorization:
          "Bearer " + token,
        "Content-Type":
          "multipart/form-data"
      }
    }

  );

  alert(
    "Campaign Created"
  );

  fetchCampaigns();

}

catch(error){

  console.log(error);

  alert(
    "Error Creating Campaign"
  );

}

};

const deleteCampaign =
async(id)=>{

try{

  const token =
    localStorage.getItem(
      "token"
    );

  await api.delete(

    `campaigns/${id}/`,

    {
      headers:{
        Authorization:
          "Bearer " + token
      }
    }

  );

  fetchCampaigns();

}

catch(error){

  console.log(error);

}

};

return (

<div>

  <h2>
    Campaign Management
  </h2>

  <hr />

  <h4>
    Create Campaign
  </h4>

  <form
    onSubmit={
      createCampaign
    }
  >

    <input
      type="text"
      name="title"
      placeholder="Title"
      className="form-control mb-2"
      onChange={
        handleChange
      }
    />

    <textarea
      name="description"
      placeholder="Description"
      className="form-control mb-2"
      onChange={
        handleChange
      }
    />

    <select
      name="cause"
      className="form-control mb-2"
      onChange={
        handleChange
      }
    >

      <option value="">
        Select Cause
      </option>

      {causes.map(
        (cause)=>(
        <option
          key={cause.id}
          value={cause.id}
        >
          {cause.title}
        </option>
      ))}

    </select>

    <input
      type="number"
      name="target_amount"
      placeholder="Target Amount"
      className="form-control mb-2"
      onChange={
        handleChange
      }
    />

    <input
      type="file"
      className="form-control mb-2"
      onChange={
        handleImage
      }
    />

    <button
      className="btn btn-success"
    >
      Create Campaign
    </button>

  </form>

  <hr />

  <h4>
    Campaign List
  </h4>

  <table
    className="table table-bordered"
  >

    <thead>

      <tr>

        <th>ID</th>
        <th>Title</th>
        <th>Target</th>
        <th>Collected</th>
        <th>Status</th>
        <th>Action</th>

      </tr>

    </thead>

    <tbody>

      {campaigns.map(
        (campaign)=>(
        <tr
          key={campaign.id}
        >

          <td>
            {campaign.id}
          </td>

          <td>
            {campaign.title}
          </td>

          <td>
            ₹
            {campaign.target_amount}
          </td>

          <td>
            ₹
            {campaign.collected_amount}
          </td>

          <td>
            {campaign.status}
          </td>

          <td>

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                deleteCampaign(
                  campaign.id
                )
              }
            >
              Delete
            </button>

          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>

);

}

export default CampaignSection;