/* eslint-disable no-unused-vars */
import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            <h4>IchiSensei.</h4>
          </NavLink>
          <NavLink to="/schedule">スケジュール</NavLink>
          <NavLink to="/my_course">私の学び</NavLink>
          <NavLink to="/become_teacher">教師になる</NavLink>
          <NavLink to="/about">Ichisenseiについて</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
