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
  
// OTHER WAY

// import React from 'react'
// import starRating from '../star-rating.json'

// function Rating(props) {
//   return (
//     <div>

//         {props.children == 0 &&  starRating[0].ZeroStars}

//         {(props.children >= 1 && props.children < 1.5) && starRating[0].OneStars}

//         {(props.children > 1.5 && props.children < 2.5) && starRating[0].TwoStars}

//         {(props.children >= 2.5 && props.children < 3.5) && starRating[0].ThreeStars}

//         {(props.children >= 3.5 && props.children < 4.5) && starRating[0].FourStars}

//         {(props.children >= 4.5 && props.children < 5) && starRating[0].FiveStars}

//         <br/>
//         {props.children}

//     </div>
//   )
// }

// export default Rating;

//also need a json file

// [
//   {
//      "ZeroStars": "☆☆☆☆☆",
//      "OneStars": "★☆☆☆☆",
//      "TwoStars": "★★☆☆☆",
//      "ThreeStars": "★★★☆☆",
//      "FourStars": "★★★★☆",
//      "FiveStars": "★★★★★"

//   }
// ]