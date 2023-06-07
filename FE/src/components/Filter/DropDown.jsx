/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";


function DropDown({ item }) {
    return (
      <div className="p-2">
        <select style={{color: "black", fontWeight : "bold", borderRadius : "10px"}}>
        <option value={item.name} disabled selected>{item.name}</option>
          {item.value.map((i) => (
            <option style={{fontWeight:"bold"}}key={i} value={i}>
              {i}
            </option>
          ))}
          {console.log(item)}
        </select>
      </div>
    );
  }

export default DropDown;