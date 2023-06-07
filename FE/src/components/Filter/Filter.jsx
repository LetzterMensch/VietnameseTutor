/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu } from "./DropDownStyles";
import {
  CoursesProvider,
  CoursesConsumer,
} from "../../context/CoursesProvider";
import Listing from "../Listing/Listing";

function Filter() {
  const [searchInput, setSearchInput] = useState("");
  const [data, getData] = useState([]);
  const [selectedId, setSelectedId] = useState(undefined);
  const [selectedName, setSelectedName] = useState(undefined);
  const URL = "/server/courses.json";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  const handleSelect2Change = (e) => {
    console.log(e.target.value);
    setSelectedName(e.target.value);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedId(e.target.value);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    data.filter((item) => {
      return item.name.match(searchInput);
    });
  }
  const levels = { name: "レベル", value: ["A", "B", "C"] };
  const expYears = { name: "経験年数", value: ["1-3", "3-5", ">5"] };
  const genders = { name: "教師", value: ["男性", "女性"] };
  const prices = {
    name: "値段",
    value: ["<50万VND", "50万-200万VND", ">200万VND"],
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink>
            <div className="p-2">
              <select
                onChange={handleSelectChange}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                <option value={levels.name} selected>
                  {levels.name}
                </option>
                {levels.value.map((i) => (
                  <option style={{ fontWeight: "bold" }} key={i} value={i}>
                    {i}
                  </option>
                ))}
                {console.log(levels)}
              </select>
            </div>
          </NavLink>
          <NavLink>
            <DropDown item={expYears}></DropDown>
          </NavLink>
          <NavLink>
            <DropDown item={genders}></DropDown>
          </NavLink>
          <NavLink>
            <div className="p-2">
              <select
                onChange={handleSelect2Change}
                style={{
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                <option value={prices.name} selected>
                  {prices.name}
                </option>
                <option value="200000" style={{ fontWeight: "bold" }}>
                  {"<50万VND"}
                </option>
                <option value="600000" style={{ fontWeight: "bold" }}>
                  {"50万-200万VND"}
                </option>
                <option value="2100000" style={{ fontWeight: "bold" }}>
                  {">200万VND"}
                </option>
                {console.log(prices)}
              </select>
            </div>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <input
            type="search"
            onChange={handleChange}
            placeholder="検索もの"
            value={searchInput}
          />
          <NavBtnLink>検索</NavBtnLink>
        </NavBtn>
      </Nav>
      <div className="container">
        <CoursesProvider>
          <CoursesConsumer>
            {function (value) {
              const { propertyListings } = [];
              if (
                searchInput.length > 0
              ) {
                console.log(data);
                return (
                  <div className="columns">
                    {data
                      .filter((item) => {
                        return item.name.match(searchInput);
                      })
                      ?.map((listing) => (
                        <Listing key={listing.id} listing={listing} />
                      ))}
                  </div>
                );
              } else
                return (
                  <div className="columns">
                    {data
                      .filter((value) => {
                        console.log("Value :");
                        console.log(data);
                        if (selectedId && selectedName) {
                          return (
                            value.level === selectedId &&
                            Number(value.price) === Number(selectedName)
                          );
                        } else if (selectedId) {
                          return value.level === selectedId;
                        } else if (selectedName) {
                          return Number(value.price) === Number(selectedName);
                        } else {
                          return true;
                        }
                      })
                      ?.map((listing) => (
                        <Listing key={listing.id} listing={listing} />
                      ))}
                  </div>
                );
            }}
          </CoursesConsumer>
        </CoursesProvider>
      </div>
    </>
  );
}

export default Filter;
