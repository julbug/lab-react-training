import React from 'react'

export default function Greetings(props) {

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
    <h3> {`${greeting} ${props.children}`}</h3>
    </div>
  )
  }