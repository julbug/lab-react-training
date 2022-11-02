import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    return (
        <div className="driverCard">
          <img className='driverPicture' src={props.img} alt="Profile" />
          <div>
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <span>{props.car.model} - </span>
            <span>{props.car.licensePlate}</span>
          </div>
        </div>
      );
    }
