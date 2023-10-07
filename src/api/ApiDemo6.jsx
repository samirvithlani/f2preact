import axios from 'axios'
import React from 'react'

export const ApiDemo6 = () => {

    const postData = async () => {

        var data = {
            name:"amrita singh",
            email:"am@gmail.com",
            status:"active",
            gender:"female"

        }
        const res = await axios.post("https://gorest.co.in/public/v2/users",data,{
            headers:{
                "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
            }
        })


            console.log(res)

    }
  return (
    <div>
        <button onClick={()=>postData()}>Post Data</button>
    </div>
  )
}
