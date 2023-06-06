import React, { useState, useEffect, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
          <AnimatePresence mode="exit">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Projects />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Contact />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
