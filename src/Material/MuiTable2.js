import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MuiTable2 = () => {

    const [users, setusers] = useState([])
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            width: 200,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        {
            field: 'isActive',
            headerName: 'Status',
            width: 200,
        }
    ]

    const fetchUserData = async () => {

        const res = await axios.get('https://node5.onrender.com/user/user')
        setusers(res.data.data)

    }
    useEffect(() => {
      
        fetchUserData()
      
    }, [])
    
  return (
    <div>
        <h1>USER DATA</h1>
        <DataGrid
        getRowId={(row) => row._id}
        rows={users}
        columns={columns}
        >

        </DataGrid>
    </div>
  )
}
