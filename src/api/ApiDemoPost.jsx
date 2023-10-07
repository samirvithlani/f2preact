import axios from 'axios'
import React from 'react'

export const ApiDemoPost = () => {
    const postData = async () => {

        const data ={
            name: "sachin",
            job: "developer"
        }
        const res = await axios.post("https://reqres.in/api/users", data)
        console.log(res)
        if(res.status===201){
            alert("Data Posted Successfully")
        }
        console.log(res.data)

    }
  return (
    <div>
            <button onClick={()=>postData()}>Post Data</button>
    </div>
  )
}
