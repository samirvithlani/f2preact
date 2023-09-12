import React, { useState } from "react";
import { UserList } from "./UserList";
import { UserReg } from "./UserReg";

export const Users = () => {
  //   var users = [
  //     {
  //       id: 1,
  //       name: "raj",
  //       email: "raj@gmail.com",
  //       age: 20,
  //     },
  //     {
  //       id: 2,
  //       name: "parth",
  //       email: "parth@gmail.com",
  //       age: 25,
  //     },
  //     {
  //       id: 3,
  //       name: "amit",
  //       email: "amit@gmail.com",
  //       age: 30,
  //     },
  //   ];

  //user ->state / variable
  //setuser -> function to update state
  //useState -> hook
  //() -> initial value of state
  var [users, setusers] = useState([
    {
      id: 1,
      name: "raj",
      email: "raj@gmail.com",
      age: 20,
    },
    {
      id: 2,
      name: "parth",
      email: "parth@gmail.com",
      age: 25,
    },
    {
      id: 3,
      name: "amit",
      email: "amit@gmail.com",
      age: 30,
    },
  ]);

  function testUser(data) {
    console.log("test data!!", data);
    // alert("test user");
  }
  function addUser(userObj) {
    //users.push(userObj);
    //spread operator///
    users = [...users, userObj];
    console.log("users after add...", users);
    setusers(users);
  }

  function addUserForm(user) {
    console.log("add user form", user);
    users = [...users, user];
    setusers(users);
  }

  const deleteUser = (id) => {
    // alert("delete user with id "+id);

    //1
    users = users.filter((user) => {
      //1!=3 true
      //2!=3 true
      //3!=3 false
      return user.id != id;
    });
    //to update state
    setusers(users);
  };
  return (
    <div>
      {/* <button onClick={()=>{testUser()}}>TEST USER</button> */}
      <h1>USERS</h1>
      <UserList
        users={users}
        testUser={testUser}
        addUser={addUser}
        delete={deleteUser}
      />
      <UserReg addUser={addUserForm} />
    </div>
  );
};
