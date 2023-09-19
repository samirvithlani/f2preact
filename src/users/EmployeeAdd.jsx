import React from "react";
import { useForm } from "react-hook-form";

export const EmployeeAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required",
      },
      minLength: {
        value: 3,
        message: "Name must be atleast 3 characters",
      },
      maxLength: {
        value: 10,
        message: "Name must not exceed 10 characters",
      },
    },
    age: {
      required: {
        value: true,
        message: "Age is required",
      },
      min: {
        value: 18,
        message: "Age must be atleast 18",
      },
      max: {
        value: 60,
        message: "Age must not exceed 60",
      },
    },
    contact: {
      required: {
        value: true,
        message: "Contact is required",
      },
      pattern: {
        //regex regular expression
        value: /[6-9]{1}[0-9]{9}/,
        message: "enter a valid contact number",
      },
      maxLength: {
        value: 10,
        message: "Contact must be 10 digits",
      },
    },
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        //regex regular expression
        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        message: "enter a valid email",
      },
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", validationSchema.name)}
          />
          <span className="text-danger">{errors.name?.message}</span>
        </div>
        <div>
          <label htmlFor="age">AGE</label>
          <input
            type="number"
            className="form-control"
            {...register("age", validationSchema.age)}
          />
          <span className="text-danger">{errors.age?.message}</span>
        </div>
        <div>
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            className="form-control"
            {...register("contact", validationSchema.contact)}
          />
          <span className="text-danger">{errors.contact?.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            {...register("email", validationSchema.email)}
          />
          <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div>
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};
