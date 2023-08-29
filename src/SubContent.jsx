import React from 'react'

export const SubContent = (props) => {

    console.log("sub content props...",props);
  return (
    <div style={{color:"white"}}>
        <h1>SUB CONTENT</h1>
        <h2>{props.detail.city}</h2>
    </div>
  )
}
