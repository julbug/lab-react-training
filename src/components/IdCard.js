import React from 'react'

export default function IdCard( props) {
  return (
    <div className="IdCard">
      <img src= {props.picture} className="profile" alt="profile" />
      <div className="text">
      <h3>Last Name:</h3> {props.lastName}
      <h3>First Name:</h3> {props.firstName}
      <h3>Gender:</h3> {props.gender}
      <h3>Height:</h3> {props.height} cm
      <h3>Birth:</h3>  {props.birth}
      </div>
  </div>
  )
}
