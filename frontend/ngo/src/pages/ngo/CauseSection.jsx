import { useEffect, useState } from "react";
import api from "../../api/axios";

function CauseSection() {

  const [causes, setCauses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "education",
    goal_amount: "",
    image: null
  });

  useEffect(() => {
    fetchCauses();
  }, []);

  const fetchCauses = async () => {

    try {

      const response =
        await api.get("causes/");

      setCauses(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleImage = (e) => {

    setFormData({
      ...formData,
      image: e.target.files[0]
    });

  };

  const createCause = async (e) => {

    e.preventDefault();

    try {

      const token =
        localStorage.getItem("token");

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
        "category",
        formData.category
      );

      data.append(
        "goal_amount",
        formData.goal_amount
      );

      if(formData.image){

        data.append(
          "image",
          formData.image
        );

      }

      await api.post(

        "causes/",

        data,

        {
          headers: {
            Authorization:
              "Bearer " + token,
            "Content-Type":
              "multipart/form-data"
          }
        }

      );

      alert(
        "Cause Created Successfully"
      );

      fetchCauses();

    }

    catch(error){

      console.log(error);

      alert(
        "Error Creating Cause"
      );

    }

  };

  const deleteCause = async(id)=>{

    try{

      const token =
        localStorage.getItem(
          "token"
        );

      await api.delete(

        `causes/${id}/`,

        {
          headers:{
            Authorization:
              "Bearer " + token
          }
        }

      );

      fetchCauses();

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

      <hr />

      <h4>
        Create Cause
      </h4>

      <form
        onSubmit={createCause}
      >

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <select
          name="category"
          className="form-control mb-2"
          onChange={handleChange}
        >

          <option value="education">
            Education
          </option>

          <option value="healthcare">
            Healthcare
          </option>

          <option value="hunger">
            Hunger
          </option>

          <option value="environment">
            Environment
          </option>

        </select>

        <input
          type="number"
          name="goal_amount"
          placeholder="Goal Amount"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          type="file"
          className="form-control mb-2"
          onChange={handleImage}
        />

        <button
          className="btn btn-success"
        >
          Create Cause
        </button>

      </form>

      <hr />

      <h4>
        Manage Causes
      </h4>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Goal</th>
            <th>Raised</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {causes.map((cause)=>(

            <tr key={cause.id}>

              <td>
                {cause.id}
              </td>

              <td>
                {cause.title}
              </td>

              <td>
                {cause.category}
              </td>

              <td>
                ₹{cause.goal_amount}
              </td>

              <td>
                ₹{cause.raised_amount}
              </td>

              <td>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    deleteCause(
                      cause.id
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

export default CauseSection;