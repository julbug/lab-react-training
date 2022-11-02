import React from 'react'

export default function Rating(props) {
    const numberOfStars = Math.round(props.children);
    console.log("Props: ", props.children, " Number of Stars: ", numberOfStars)
    return (
      <div className="ratingStars">
        {numberOfStars === 0 && <p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>}
        {numberOfStars === 1 && <p>&#9733; &#9734; &#9734; &#9734; &#9734;</p>}
        {numberOfStars === 2 && <p>&#9733; &#9733; &#9734; &#9734; &#9734;</p>}
        {numberOfStars === 3 && <p>&#9733; &#9733; &#9733; &#9734; &#9734;</p>}
        {numberOfStars === 4 && <p>&#9733; &#9733; &#9733; &#9733; &#9734;</p>}
        {numberOfStars === 5 && <p>&#9733; &#9733; &#9733; &#9733; &#9733;</p>}
      </div>
    );
  }
  
