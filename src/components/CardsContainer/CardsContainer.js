import React from "react"
import NewsCard from "../NewsCard/NewsCard"
import { Grid, Grow } from "@material-ui/core"
import useStyles from "./Styles"
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  { color: "#00838f", title: "Country News", text: "What's up with Morocco" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
]
const CardsContainer = ({ articles }) => {
  const classes = useStyles()

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="scretch"
          spacing={3}
        ></Grid>
      </Grow>
    )
  }
  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="scretch"
        spacing={3}
      >
        {articles.map((article, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard key={idx} article={article} i={idx} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default CardsContainer
