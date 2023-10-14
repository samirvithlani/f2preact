import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const id = useParams().id
    const [user, setuser] = useState({})
    const getUserDataById = async () => {

        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        console.log(res.data)
        setuser(res.data.data)

    }

    useEffect(() => {
      
    getUserDataById()
      
    }, [])

    var cardStyle = {
        margin: "0 auto",
        height: "400px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: "10px",
    }
    
  return (
    <div>UserDetail

        <div style={cardStyle}>
            <div>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h3>{user.isActive?"ACTIVE":"NOT ACTIVE"}</h3>
            </div>
        </div>
    </div>
  )
}
