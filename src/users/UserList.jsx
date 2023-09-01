import React from 'react'

export const UserList = (props) => {
  return (
    <div>
        <button className='btn btn-info' onClick={()=>{props.testUser(100)}}>TEST USER</button>
        <button className='btn btn-info' onClick={()=>{props.testUser("ram")}}>TEST USER</button>
        <button className='btn btn-primary' onClick={()=>{props.addUser({id:4,name:"ram",age:100,email:"ram@gmail.com"})}}>TEST USER</button>
        <h1>USER LIST</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map((user)=>{
                        return(<tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <button onClick={()=>props.delete(user.id)} className = "btn btn-danger">DELETE</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
