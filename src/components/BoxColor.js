import React from 'react'

export default function BoxColor(props) {
  return (
    <div
      className="BoxColor"
      style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}