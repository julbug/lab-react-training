import React from 'react'

export default function IdCard( props) {
  return (
    <div className="IdCard">
      <img src= {props.picture} className="profile" alt="profile" />
      <h3>Last Name:</h3> <p>{props.lastName}</p>
      <h3>First Name:</h3> <p>{props.firstName}</p>
      <h3>Gender:</h3> <p>{props.gender}</p>
      <h3>Height:</h3> <p>{props.height}</p>
      <h3>Birth:</h3>  <p>{props.birth}</p>
  </div>
  )
}
