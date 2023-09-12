import React, { useState } from "react";

export const UserReg = (props) => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState(0);
  const [gender, setgender] = useState("")
  const [city, setcity] = useState("")
  const [skills, setskills] = useState([])
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler");
    // console.log(userName);
    // console.log(email);
    // console.log(password);
    // console.log(age);
    // console.log(gender)
    // console.log(city)
    // console.log(skills)
    var user = {
        name:userName,
        email:email,
        password:password,
        age:age,
        gender:gender,
        city:city,
        skills:skills
    }
    console.log(user)
    props.addUser(user);
  };


  const userNameHandler = (event) => {

    //console.log(event.target.value);
    setuserName(event.target.value);

  }


  return (
    <div>
      <h1>UserReg</h1>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" onChange={(e)=>{userNameHandler(e)}} />
          {userName}
        </div>
        <div>
          <label htmlFor="username">EMAIL</label>
          <input type="email" onChange={(e)=>{setemail(e.target.value)}} />
          {email}
        </div>
        <div>
          <label htmlFor="username">password</label>
          <input type="password" onChange={(e)=>{setpassword(e.target.value)}} />
        </div>
        <div>
          <label htmlFor="username">Age</label>
          <input type="number" onChange={(e)=>{setage(e.target.value)}} />
        </div>
        <div>
            <label>GENDER</label>
            <br></br>
            MALE<input type="radio" value="male" name="gender" onChange={(e)=>{setgender(e.target.value)}}></input>
            <br></br>
            FEMALE<input type="radio" value="female" name="gender" onChange={(e)=>{setgender(e.target.value)}}></input>
        </div>
        <div>
            <label>CITY</label>
            <select onChange={(e)=>setcity(e.target.value)}>
                <option value="ahmedabad">AHMEDABAD</option>
                <option value="surat">SURAT</option>
                <option value="baroda">BARODA</option>
            </select>
        </div>
        <div>
            <label>SKILLS</label>
            <br></br>
                <input type="checkbox" value="react" onChange={(e)=>{setskills([...skills,e.target.value])}}></input>REACT
                <input type="checkbox" value="angular" onChange={(e)=>{setskills([...skills,e.target.value])}}></input>ANGULAR
                <input type="checkbox" value="vue" onChange={(e)=>{setskills([...skills,e.target.value])}}></input>VUE
                
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};
