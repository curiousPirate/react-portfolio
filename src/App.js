import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";


const Home = lazy(() => import("./Components/home.js"));
const About = lazy(() => import("./Components/about.js"));
const Contact = lazy(() => import("./Components/contact.js"));

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
