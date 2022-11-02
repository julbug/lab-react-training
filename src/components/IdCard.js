import React from 'react'

export default function IdCard( props) {
  return (
    <div className="IdCard">
      <img src= {props.picture} className="profile" alt="profile" />
      <h3>Last Name: {props.lastName}</h3>
      <h3>First Name: {props.firstName}</h3>
      <h3>Gender: {props.gender}</h3>
      <h3>Height: {props.height}</h3>
      <h3>Birth:  {props.birth}</h3>
  </div>
  )
}
