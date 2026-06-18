import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import NGODashboard from "./pages/ngo/NGODashboard";
import DonorDashboard from "./pages/donor/DonorDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>

<Route
  path="/ngo-dashboard"
  element={<NGODashboard />}
/>

<Route
  path="/donor-dashboard"
  element={<DonorDashboard />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;