import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/dashboard.css";

import App from "./App";

import { AuthProvider }
from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <AuthProvider>

    <App />

  </AuthProvider>

);