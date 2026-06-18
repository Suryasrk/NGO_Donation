import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import ngoImage from "../assets/images/ngo-banner.jpg";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: ""
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

      const response = await api.post(
        "login/",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.access
      );

      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "username",
        response.data.username
      );

      if (
        response.data.role === "admin"
      ) {

        navigate(
          "/admin-dashboard"
        );

      }

      else if (
        response.data.role === "ngo"
      ) {

        navigate(
          "/ngo-dashboard"
        );

      }

      else {

        navigate(
          "/donor-dashboard"
        );

      }

    }

    catch (error) {

      console.log(error);

      alert(
        "Invalid Credentials"
      );

    }

  };

  return (

    <div className="container-fluid">

      <div className="row vh-100">

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
              Welcome Back
            </h2>

            <p>
              Login to continue
            </p>

          </div>

        </div>

        <div
          className="col-md-6 d-flex align-items-center"
        >

          <div className="w-100 p-5">

            <h2>
              Login
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
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
              />

              <button
                className="btn btn-success w-100"
              >
                Login
              </button>

            </form>

            <p className="mt-3">

              Don't have an account?

              <Link
                to="/register"
                className="ms-2"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;