/* eslint-disable no-unused-vars */
import * as React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListGroup from "./components/Listing/ListGroup";
import Navbar from "./components/NavigationBar/NavBar";

function Home() {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  );
}

export default Home;
