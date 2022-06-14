import { Routes, Route } from "react-router-dom";

import PageHome from "../pages/Home/";
import LoginPage from '../pages/Login';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default MyRoutes;
