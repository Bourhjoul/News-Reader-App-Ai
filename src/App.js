import React, { useEffect } from "react"

import alanBtn from "@alan-ai/alan-sdk-web"

const alanKey =
  "8f22f64ed6a0c83c8c30ab0c71e68a652e956eca572e1d8b807a3e2338fdd0dc/stage"
const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "test") {
          alert("good")
          // Call the client code that will react to the received command
        }
      },
    })
  }, [])
  return (
    <div>
      <h1>ALAN AI NEWS APP</h1>
    </div>
  )
}

export default App
