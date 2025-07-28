import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Research from "./pages/projects/Research";
import Embedded from "./pages/projects/Embedded";
import FullStackProjects from "./pages/projects/FullStack";
import AIProjects from "./pages/projects/Ai";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { Contact } from "lucide-react";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects/research" element={<Research />} />
            <Route path="/projects/embedded" element={<Embedded />} />
            <Route path="/projects/fullstack" element={<FullStackProjects />} />
            <Route path="/projects/aiml" element={<AIProjects />} />

            {/* Add more routes as needed */}
            <Route
              path="/experience"
              element={<div>Experience Page Coming Soon</div>}
            />
            <Route
              path="/contact"
              element={<div>Contact Page Coming Soon</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
