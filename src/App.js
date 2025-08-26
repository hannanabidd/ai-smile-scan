import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import Chatbot from "./pages/Chatbot";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Results from "./pages/Results";
import { Recommendations } from "./pages/Recommendations";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload-image" element={<UploadImage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/result" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
