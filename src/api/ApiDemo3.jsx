import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [users, setusers] = useState([])
    const getApiData = async()=>{

        const res = await axios.get("https://gorest.co.in/public/v2/users")
        console.log(res.data);
        setusers(res.data)

    }
    //male female small
    //active inactive
    //active green
    //inactive red
  return (
    <div>
        
            <button onClick={()=>{getApiData()}}>Get Api Data</button>
    </div>
  )
}
