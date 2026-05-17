import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};
const pageTransition = { duration: 0.3, ease: [0.22, 1, 0.36, 1] };

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects/research" element={<Research />} />
          <Route path="/projects/embedded" element={<Embedded />} />
          <Route path="/projects/fullstack" element={<FullStackProjects />} />
          <Route path="/projects/aiml" element={<AIProjects />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <motion.div
        className="app"
        initial={{ opacity: 0, filter: "blur(12px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;
