import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}
export default App;
