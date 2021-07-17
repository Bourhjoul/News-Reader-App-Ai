import React, { useEffect, useState } from "react"
import wordsToNumbers from "words-to-numbers"
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
      onCommand: ({ command, articles, keyword, number }) => {
        switch (command) {
          case "New Headlines":
            setnewsArticles(articles)
            setKeyword(keyword)
            setactiveArticle(-1)
            break
          case "highlight":
            setactiveArticle((activeArticle) => activeArticle + 1)
            break
          case "open":
            const nbr =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number
            const article = articles[nbr - 1]
            if (!article) {
              alanBtn().playText("there is no article with this number")
              break
            }
            window.open(article.url, "_blank")
            alanBtn().playText("here you go , Opened")

            break
          default:
            break
        }
      },
    })
  }, [])
  return (
    <div style={{ textAlign: "center" }}>
      <h2>NEWS READER USING ALAN AI</h2>
      {newsArticles.length !== 0 && Keyword && (
        <h4 style={{ color: "#1565c0" }}>
          "{Keyword}" News (your keyword may be included in the description)
        </h4>
      )}
      <CardsContainer articles={newsArticles} activeArticle={activeArticle} />
      <div style={{ margin: "20px 0" }}>
        Developed by :
        <a
          href="https://github.com/Bourhjoul/"
          rel="noreferrer"
          target="_blank"
        >
          <strong>Abdessamad Bourhjoul </strong>
        </a>
        Ai :
        <a href="https://alan.app/" rel="noreferrer" target="_blank">
          <strong>ALAN AI</strong>
        </a>
      </div>
    </div>
  )
}

export default App
