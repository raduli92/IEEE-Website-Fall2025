import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Profhacks from "./components/Profhacks";
import Eboard from "./components/Eboard";
import Photos from "./components/Photos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ConnectionsGame from "./components/ConnectionsGame";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main className="overflow-y-hidden text-neutral-200 antialiased">
              <Hero />
              <About />
              <Events />
              <Profhacks />
              <Eboard />
              <Photos />
              <ContactForm />
              <Footer />
            </main>
          }
        />

        {/* Connections Game Page */}
        <Route path="/connections-game" element={<ConnectionsGame />} />
      </Routes>
    </Router>
  );
};

export default App;
