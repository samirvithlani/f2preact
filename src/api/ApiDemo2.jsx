import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    //then catch
    const [users, setusers] = useState([])
    const getUserData = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res);
        console.log(res.status);
        console.log(res.data.data);
        setusers(res.data.data)

    }
  return (
    <div>
        <button onClick={()=>getUserData()}>Get User Data</button>
        <table border="1" className="table table-dark">
        <thead>
            <tr>
                <td scope="col">Id</td>
                <td scope="col">name</td>
                <td scope="col">email</td>
                <td scope="col">age</td>
                <td scope="col">status</td>
            </tr>
        </thead>
        <tbody>
            {
                users?.map((user)=>{
                    return(
                        <tr>
                          <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.age}</td>
                          <td>{user.isActive ==true?"ACTIVE":<p style={{color:"red"}}>NOT ACTIVE</p>}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}