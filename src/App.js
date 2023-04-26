import React, { lazy, useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import RingLoader from "react-spinners/RingLoader";

const Home = lazy(() => import("./Components/home.js"));
const About = lazy(() => import("./Components/about.js"));
const Contact = lazy(() => import("./Components/contact.js"));

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
      <RingLoader color={"#426b80"} loading={loading} size={60} />
    </div>
  );

  return (
    <Router>
      <div>
        <Header />
        <Suspense fallback={<LoadingIndicator />}>
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
