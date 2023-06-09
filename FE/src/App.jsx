/* eslint-disable no-unused-vars */
import * as React from "react";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from "./components/Listing/Listing";
import TeacherListing from "./components/Listing/TeacherListing";
import Navbar from "./components/NavigationBar/NavBar";
import SearchForm from "./components/SearchForm/SearchForm";
import Filter from "./components/Filter/Filter";
import { CoursesProvider, CoursesConsumer } from "./context/CoursesProvider";
import { TeachersProvider, TeachersConsumer } from "./context/TeachersProvider";

import FuncList from "./components/Functionalities/FuncList";

function Home() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="fw-bold fs-2 text-black px-5 mx-5">
        君に理想の先生探しを始めよう！
      </div>
      <Filter />
      
      <div className="fw-bold fs-2 text-black px-5 mx-5">勉強しましょう！</div>
      <div className="table px-5 mx-5">
        <tr>
          <FuncList
            name="スケジュール"
            description=""
            img="src\assets\schedule.jpg"
          />
          <FuncList name="コース" description="" img="src\assets\course.png" />
          <FuncList
            name="クレジットカード"
            description=""
            img="src\assets\credit-card.png"
          />
        </tr>
      </div>
      <div className="fw-bold fs-2 text-black px-5 mx-5">ichisenseiの教師</div>
      <div className="container">
        <TeachersProvider>
          <TeachersConsumer>
            {function (value) {
              const { propertyListings } = value;
              return (
                <div className="columns">
                  {propertyListings.map((listing) => (
                    <TeacherListing key={listing.id} listing={listing} />
                  ))}
                </div>
              );
            }}
          </TeachersConsumer>
        </TeachersProvider>
      </div>
    </Router>
  );
}

export default Home;
