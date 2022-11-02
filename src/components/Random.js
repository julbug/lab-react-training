import React from 'react'

export default function Random(props) {
console.log (props)
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
	}
    return (
        <div className="Random">
          random value between {props.min} and {props.max} → {getRandomNumber(props.min, props.max)}
        </div>
      )
};


  
  