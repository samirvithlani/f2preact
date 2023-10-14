import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo2 = () => {
  //then catch
  const [users, setusers] = useState([]);
  const [loader, setloader] = useState(true);
  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    //loader...
    // setloader(true);
    console.log(loader);
    console.log(res);
    console.log(res.status);
    console.log(res.data.data);
    setusers(res.data.data);
    //loader...
    setloader(false);
    console.log(loader);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const deleteUserData = async (id) => {
    console.log(id);
    //delete api call

    //const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`) //new
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    ); //old
    console.log(res);

    if (res.status === 204) {
      toast.warn("🦄 Record Deleted...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      //get updated data
      getUserData();
    } else {
      toast.warn("record not deleted...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {loader ? <h1>Loading...</h1> : null}
      {/* <button onClick={()=>getUserData()}>Get User Data</button> */}
      <table border="1" className="table table-dark">
        <thead>
          <tr>
            <td scope="col">Id</td>
            <td scope="col">name</td>
            <td scope="col">email</td>
            <td scope="col">age</td>
            <td scope="col">status</td>
            <td scope="col">action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  {user.isActive == true ? (
                    "ACTIVE"
                  ) : (
                    <p style={{ color: "red" }}>NOT ACTIVE</p>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => deleteUserData(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <Link to ={`/user/detail/${user._id}`} className="btn btn-primary">Detail</Link>
                  <Link to ={`/user/edit/${user._id}`} className="btn btn-primary">EDIT</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
