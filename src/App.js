import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar";
import "./App.css";
import Her from "../src/pages/her";
import Reasons from "../src/pages/reasons";
import Montage from "../src/pages/montage";
import Moments from "../src/pages/moments";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Her />} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/montage" element={<Montage />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
  );
}

export default App;
