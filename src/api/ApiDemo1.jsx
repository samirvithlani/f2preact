import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {

    const [users, setusers] = useState([])


  const getUserData = () => {
    //dummy api....
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        //res....
        console.log(res);
        console.log(res.status);
        console.log(res.data);
        console.log(res.data.data);
        //res.data.page
        setusers(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => getUserData()}>Get User Data</button>
      <table border="1" className="table table-dark">
        <thead>
            <tr>
                <td scope="col">Id</td>
                <td scope="col">firstName</td>
                <td scope="col">lastName</td>
                <td scope="col">EMAIL</td>
                <td scope="col">AVATAR</td>
            </tr>
        </thead>
        <tbody>
            {
                users?.map((user)=>{
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <img src = {user.avatar} alt = "avatar" />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};
