import React from "react";
import { useForm } from "react-hook-form";

export const StudentAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("error....", errors);

  const validationSchema = {
    name:{
        required:{
            value:true,
            message:"name is required"
        }
    },
    email:{
        required:{
            value:true,
            message:"email is required"
        },
        
    }
  }


  const submithandler = (data) => {
    console.log("user data...", data);
  };
  return (
    <div>
      <h1>STUDET ADD..</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div className="form-group">
          <input
            type="text"
            {
                ...register("name",validationSchema.name)
            }
            // {...register("name", {
            //   required: { value: true, message: "Name is required !!" },
            // })}
            className="form-control"
            placeholder="NAME"
          ></input>
          {<p>{errors?.name?.message}</p>}
          {/* {errors.name && <p>{errors.name.message}</p>}  */}
        </div>
        <div className="form-group">
          <input
            type="email"
            {...register("email",validationSchema.email)}
            className="form-control"
            placeholder="EMAIL"
          ></input>
            {<p>{errors?.email?.message}</p>}
        </div>
        <div>
          <input type="submit" className="btn btn-primary"></input>
        </div>
      </form>
    </div>
  );
};
