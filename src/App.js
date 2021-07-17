import React, { useEffect, useState } from "react"

import alanBtn from "@alan-ai/alan-sdk-web"
import CardsContainer from "./components/CardsContainer/CardsContainer"

const alanKey =
  "8f22f64ed6a0c83c8c30ab0c71e68a652e956eca572e1d8b807a3e2338fdd0dc/stage"
const App = () => {
  const [newsArticles, setnewsArticles] = useState([])
  const [activeArticle, setactiveArticle] = useState(-1)

  const [Keyword, setKeyword] = useState("")
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, keyword, currentarticle }) => {
        if (command === "New Headlines") {
          setnewsArticles(articles)
          setKeyword(keyword)
          setactiveArticle(-1)
        } else if (command === "highlight") {
          setactiveArticle((activeArticle) => activeArticle + 1)
        }
      },
    })
  }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <h2>NEWS READER USING ALAN AI</h2>
      {newsArticles.length === 0 && Keyword && (
        <h4 style={{ color: "#1565c0" }}>
          "{Keyword}" News (your keyword may be included in the description)
        </h4>
      )}
      <CardsContainer articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App
