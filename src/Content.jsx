import React from "react";
import "./Content.css";
import { SubContent } from "./SubContent";

export const Content = (props) => {
  return (
    <div className="content">
      
      Mahendra Singh Dhoni is a former Indian cricketer. He was captain of the
      Indian national team in limited-overs formats from 2007 to 2017 and in
      Test cricket from 2008 to 2014. He plays as a right-handed
      wicket-keeper-batsman and is also the current captain of Chennai Super
      Kings in the Indian Premier League. Wikipedia
      <h2>
        CITY = {props.detail.city}
      </h2>
      {/* <SubContent contentdetail = {props.detail}/> */}
      <SubContent detail = {props.detail}/>
    </div>
  );
};
