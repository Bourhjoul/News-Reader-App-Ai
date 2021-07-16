import React from "react"
import NewsCard from "../NewsCard/NewsCard"

const CardsContainer = ({ articles }) => {
  return (
    <div>
      {articles.map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  )
}

export default CardsContainer
