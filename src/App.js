import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header.js";


const Home = lazy(() => import("./Components/home.js"));
const SolarSystem = lazy(() => import("./Components/solarsystem.js"));
const Contact = lazy(() => import("./Components/contact.js"));

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<SolarSystem />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
