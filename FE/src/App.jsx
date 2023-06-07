/* eslint-disable no-unused-vars */
import * as React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Listing from "./components/Listing/Listing";
import Navbar from "./components/NavigationBar/NavBar";
import SearchForm from "./components/SearchForm/SearchForm";
import Filter from "./components/Filter/Filter";
import { CoursesProvider, CoursesConsumer } from "./context/CoursesProvider";

function Home() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="fw-bold fs-2 text-black px-5 mx-5">
        君に理想の先生探しを始めよう！
      </div>
      <Filter />
      <div className="container">
        <CoursesProvider>
          <CoursesConsumer>
            {function (value) {
              const { propertyListings } = value;
              return (
                <div className="columns">
                  {propertyListings.map((listing) => (
                    <Listing key = {listing.id} listing={listing} />
                  ))}
                </div>
              );
            }}
          </CoursesConsumer>
        </CoursesProvider>
      </div>
    </Router>
  );
}

export default Home;
