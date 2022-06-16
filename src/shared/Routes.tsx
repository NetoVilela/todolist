import { Routes, Route } from "react-router-dom";

import PageHome from "../pages/Home/";
import CreditosPage from '../pages/Creditos';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/home" element={<PageHome />} />
      <Route path="/creditos" element={<CreditosPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default MyRoutes;
