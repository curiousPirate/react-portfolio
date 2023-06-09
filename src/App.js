import React, { useState, useEffect, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header.js";
import Home from "./Components/home.js";
import About from "./Components/about.js";
import Projects from "./Components/projects.js";
import Contact from "./Components/contact.js";
import Footer from "./Components/footer.js";
import RingLoader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const LoadingIndicator = () => (
    <div className="loading">
      <RingLoader color={"#102a43"} loading={loading} size={60} />
    </div>
  );

  return (
    <HashRouter>
      <div>
        <Header />
        <Suspense fallback={<LoadingIndicator />}>
            <Routes>
              <Route
                path="/"
                element={
                    <Home />
                }
              />
              <Route
                path="/about"
                element={
                    <About />
                }
              />
              <Route
                path="/projects"
                element={
                    <Projects />
                }
              />
              <Route
                path="/contact"
                element={
                    <Contact />
                }
              />
            </Routes>
        </Suspense>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
