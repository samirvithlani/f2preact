import React from "react";
import { useState } from "react";
import { StudentAdd } from "../users/StudentAdd";
import { AddStudent } from "./AddStudent";
import { AppContext } from "./context";
import { StudentList } from "./StudentList";

export const Students = () => {
  var [students, setstudents] = useState([
    {
      id: 101,
      name: "amit",
      age: 23,
    },
    {
      id: 102,
      name: "raj",
      age: 21,
    },
    {
      id: 103,
      name: "krunal",
      age: 25,
    },
  ]);
  //get all student
  //payload object / data
  const studentDistpacther = (action, payload) => {

        switch(action){

            case "ADD_STUDENT":
                //students push.... spread operator
                students = [...students,payload]
                //update useState
                setstudents(students)
            break;
            case "DELETE_STUDENT":
                students = students.filter((stu)=>stu.id!=payload.id)
                setstudents(students)
                break;
            default:
                break;    
        }


  };

  return (
    <div>
      <h1>STUDENTS</h1>
      {/* <StudentList students = {students}/> */}
      <AppContext.Provider value={{ students,studentDistpacther }}>
        <AddStudent/> 
        <StudentList />
      </AppContext.Provider>
    </div>
  );
};
