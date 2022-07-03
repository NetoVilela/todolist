import { Routes, Route } from "react-router-dom";

import PageHome from "../pages/Home/";
import DesenvolvedorPage from '../pages/Desenvolvedor';
import TarefasPage from '../pages/Tarefas';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/home" element={<PageHome />} />
      <Route path="/developer" element={<DesenvolvedorPage />} />
      <Route path="/tarefas" element={<TarefasPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default MyRoutes;
