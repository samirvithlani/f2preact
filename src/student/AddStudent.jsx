import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from './context'

export const AddStudent = () => {
    const {studentDistpacther} = useContext(AppContext)
    const {register,handleSubmit,formState:{errors}} = useForm()
    const submitHandler = (data)=>{
        studentDistpacther("ADD_STUDENT",data)
    }
  return (
    <div>STUDENT --- AddStudent
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>ID</label>
                <input type="text" {...register("id")}/>
            </div>
            <div>
                <label>NAME</label>
                <input type="text" {...register("name")}/>
            </div>
            <div>
                <label>AGE</label>
                <input type="text" {...register("age")}/>
            </div>
            <div>
                <input type="submit" value="ADD STUDENT"/>
            </div>
        </form>
    </div>
  )
}
