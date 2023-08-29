//class based component and functional component
//after version 16 -->functional component
//function keyword ,arrow function
//rafc
import React from "react";

export const Header = (props) => {
  //console.log("header props...",props);
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "150px",
        margin: "10px",
        paddingTop: "10px",
        color: "white",
      }}
    >
      <h1>HEADER...</h1>
      <h3>{props.t} -- {props.estd}</h3>
      <h4>{props.detail.city}--{props.detail.area}</h4>
    </div>
  );
};
