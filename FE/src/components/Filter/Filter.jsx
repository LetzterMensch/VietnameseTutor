/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu } from "./DropDownStyles";

function Filter() {
  const levels = { name: "レベル", value: ["A", "B", "C"] };
  const expYears = {name:"経験年数",value:["1-3", "3-5", ">5"]};
  const genders = {name : "教師",value:["男性", "女性"]};
  const prices = {name:"値段", value:["<50万VND", "50万-200万VND", ">200万VND"]};

  return (
    <Nav>
      <Bars />
      <NavMenu>
        <NavLink>
          <DropDown item={levels}></DropDown>
        </NavLink>
        <NavLink>
          <DropDown item={expYears}></DropDown>
        </NavLink>
        <NavLink>
          <DropDown item={genders}></DropDown>
        </NavLink>
        <NavLink>
          <DropDown item={prices}></DropDown>
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink>検索</NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Filter;
