import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import ngoImage from "../assets/images/ngo-banner.jpg";

function Register() {

  const navigate = useNavigate();

  const selectedRole =
    localStorage.getItem("selectedRole");

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      phone: "",
      password: "",
      role: selectedRole || "donor"
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "register/",
        formData
      );

      alert(
        "Registration Successful"
      );

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert(
        "Registration Failed"
      );

    }

  };

  return (

    <div className="container-fluid">

      <div className="row vh-100">

        {/* Left Side */}

        <div
          className="col-md-6 bg-success text-white d-flex align-items-center justify-content-center"
        >

          <div className="text-center">

            <img
              src={ngoImage}
              alt="NGO"
              className="img-fluid rounded shadow mb-4"
              style={{
                maxWidth: "450px"
              }}
            />

            <h2>
              Join Our Community
            </h2>

            <p>
              Help create positive change through donations and volunteering.
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div
          className="col-md-6 d-flex align-items-center"
        >

          <div className="w-100 p-5">

            <h2 className="mb-4">
              Register
            </h2>

            <form
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="username"
                placeholder="Username"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <input
                value={selectedRole}
                readOnly
                className="form-control mb-3"
              />

              <button
                className="btn btn-success w-100"
              >
                Register
              </button>

            </form>

            <p className="mt-3">

              Already have an account?

              <Link
                to="/login"
                className="ms-2"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Register;