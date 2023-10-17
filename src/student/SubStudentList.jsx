import React, { useContext } from 'react'
import { AppContext } from './context'

export const SubStudentList = () => {
    //console.log("substudent list...",props)
    const {students} = useContext(AppContext)
    console.log("substudent list...",students)
  return (
    <div>Student ---- studentlist ---- SubStudentList</div>
  )
}
