import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/admin/ErrorPage";
import Login from "./pages/admin/Login"
import Register from "./pages/admin/Register";
import ForgetPass from "./pages/admin/ForgetPass"
import AdminProfile from "./pages/admin/AdminProfile"

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/adminProf" element={<AdminProfile />} />
      <Route path="/forgot-password" element={<ForgetPass />} />
      <Route path="/admin" element={<div>Admin Page</div>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
