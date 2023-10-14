import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function App() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/education" element={<Education />}></Route>
    </Routes>
  );
}

export default App;
