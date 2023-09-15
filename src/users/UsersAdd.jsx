import React from "react";
import { useForm } from "react-hook-form";

export const UsersAdd = () => {
  const { register, handleSubmit } = useForm();
  //register -->array de objetes
  //handleSubmit -->funcion

  const submithandler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submithandler)}>
        <div className="form-group">
          <label>NAME:</label>
          <input
            className="form-control"
            type="text"
            {...register("name")}
          ></input>
        </div>
        <div className="form-group">
          <label>EMAIL:</label>
          <input
            className="form-control"
            type="email"
            {...register("user_email")}
          ></input>
        </div>
        <div className="form-group">
          <label>PASSWORD:</label>
          <input
            className="form-control"
            type="password"
            {...register("pwd")}
          ></input>
        </div>
        <div className="form-group">
          <label>GENDER:</label>
          MALE:<input type="radio" value="male" {...register("gender")}></input>
          FEMALE:
          <input type="radio" value="female" {...register("gender")}></input>
        </div>
        <div className="COUNTRY">
          <label>COUNTRY:</label>
          <select {...register("country")}>
            <option value="india">INDIA</option>
            <option value="usa">USA</option>
            <option value="ch">CHINA</option>
          </select>
        </div>
        <div>
          <label>LANGUAGES:</label>
          <br></br>
          ENGLISH:
          <input
            type="checkbox"
            name="lang"
            value="english"
            {...register("language")}
          ></input>
          HINDI:
          <input
            type="checkbox"
            name="lang"
            value="hindi"
            {...register("language")}
          ></input>
          TAMIL:
          <input
            type="checkbox"
            name="lang"
            value="tamil"
            {...register("language")}
          ></input>
        </div>
        <div className="form-group">
          <input type="color" {...register("favcolor")}></input>
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="ADD"></input>
        </div>
      </form>
    </div>
  );
};
