import React from 'react'

export default function ClickablePicture(props) {
    console.log(props)
    const handleClick = event => {
        console.log(event.target);
         };

  return (
    <div>
      <img
        src={props}
        alt="img"
        onClick={handleClick}
      />
    </div>
  );
   
};


// import React, { useState } from "react";

// export default function ClickablePicture(props) {
//   let [changeImg, setChangeImg] = useState(true);
//   const handleChange = () => {
//     return setChangeImg(!changeImg);
//   };

//   return (
//     <div>
//       <button><img src={props.img, props.imgClicked}alt="image"  onClick={() => handleChange()}/></button>
//       {/* {changeImg ? props.img: props.imgClicked} */}
//     </div>
//   );
// }