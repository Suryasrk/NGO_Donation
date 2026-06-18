import { useState, useEffect } from "react";
import api from "../../api/axios";

function EventSection() {

const [events, setEvents] =
useState([]);

const [formData, setFormData] =
useState({
title: "",
description: "",
event_date: "",
location: "",
image: null
});

useEffect(() => {

fetchEvents();

}, []);

const fetchEvents = async () => {

try {

  const response =
    await api.get("events/");

  setEvents(
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

const createEvent =
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
    "event_date",
    formData.event_date
  );

  data.append(
    "location",
    formData.location
  );

  if(formData.image){

    data.append(
      "image",
      formData.image
    );

  }

  await api.post(

    "events/",

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
    "Event Created"
  );

  fetchEvents();

}

catch(error){

  console.log(error);

  alert(
    "Error Creating Event"
  );

}

};

const deleteEvent =
async(id)=>{

try{

  const token =
    localStorage.getItem(
      "token"
    );

  await api.delete(

    `events/${id}/`,

    {
      headers:{
        Authorization:
          "Bearer " + token
      }
    }

  );

  fetchEvents();

}

catch(error){

  console.log(error);

}

};

return (

<div>

  <h2>
    Event Management
  </h2>

  <hr />

  <h4>
    Create Event
  </h4>

  <form
    onSubmit={
      createEvent
    }
  >

    <input
      type="text"
      name="title"
      placeholder="Event Title"
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

    <input
      type="date"
      name="event_date"
      className="form-control mb-2"
      onChange={
        handleChange
      }
    />

    <input
      type="text"
      name="location"
      placeholder="Location"
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
      Create Event
    </button>

  </form>

  <hr />

  <h4>
    Event List
  </h4>

  <table
    className="table table-bordered"
  >

    <thead>

      <tr>

        <th>ID</th>
        <th>Title</th>
        <th>Date</th>
        <th>Location</th>
        <th>Action</th>

      </tr>

    </thead>

    <tbody>

      {events.map(
        (event)=>(
        <tr
          key={event.id}
        >

          <td>
            {event.id}
          </td>

          <td>
            {event.title}
          </td>

          <td>
            {event.event_date}
          </td>

          <td>
            {event.location}
          </td>

          <td>

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                deleteEvent(
                  event.id
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

export default EventSection;