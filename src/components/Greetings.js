import React from 'react'

function Greetings(props) {

  console.log (props)

  let greeting = ""

  switch (props.lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Halo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
      default:
        greeting = "YO WASSSSUPPP";
  }
  return (
    <div className="Greeting">
    <p> {`${greeting} ${props.children}`}</p>
    </div>
  )
  }

  export default Greetings;


  //OTHER WAY//

// import React from 'react'
// import { useState } from 'react';
// import greetMesage from '../greet-message.json'

//  function Greetings(props) {


//   return (
//     <div class="box">
//         {props.lang === "de" && greetMesage[0].de}
//         {props.lang === "fr" && greetMesage[0].fr}
//         {props.lang === "en" && greetMesage[0].en}
//         {props.children}


//     </div>



//   )
// }


// export default Greetings;

//**NEED TO ADD .JSON FILE FOR THIS METHOD */

// [
//   {   "en":"Hello ",
//       "de":"Hallo ",
//       "fr":"Bonjour "
//   }

// ]