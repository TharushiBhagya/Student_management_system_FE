import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import AdminPage from "./pages/adminPage/Admin";
import LoginPage from "./Pages/HomePage/login";
import SignUpPage from "./Pages/HomePage/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
