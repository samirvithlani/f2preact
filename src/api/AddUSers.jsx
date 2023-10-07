import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AddUSers = () => {
  // const addUser = async () => {
  //     var user = {
  //         name:"ram",
  //         age: 23,
  //         email: "ram@gmail.com",
  //         isActive:true
  //         }
  //     const res = await axios.post("https://node5.onrender.com/user/user",user)
  //     console.log(res)

  // }

  var navigate = useNavigate()

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log("data...", data);
    var userObj = {
      name: data.name,
      age: data.age,
      email: data.email,
      isActive: data.isActive == "true" ? true : false,
    };
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    console.log(res);
    console.log(res.data);
    if (res.status === 201) {

        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    setTimeout(() => {
        navigate("/apidemo2")    
    }, 3000);
    
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="isActive">isActive</label>
          TRUE:
          <input
            type="radio"
            name="isActive"
            id="isActive"
            value="true"
            {...register("isActive")}
          />
          FALSE:
          <input
            type="radio"
            name="isActive"
            id="isActive"
            value="false"
            {...register("isActive")}
          />
        </div>
        <div>
          <input type="submit" value="Add User" />
        </div>
      </form>
    </div>
  );
};
