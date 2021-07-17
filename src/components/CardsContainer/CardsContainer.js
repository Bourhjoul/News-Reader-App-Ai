import React from "react"
import NewsCard from "../NewsCard/NewsCard"
import { Grid, Grow, Typography } from "@material-ui/core"
import useStyles from "./Styles"
import {
  BiTrendingUp,
  BiWorld,
  BsFilter,
  Ri24HoursFill,
  VscSourceControl,
} from "react-icons/all"

const infoCards = [
  {
    color: "#db1515",
    title: "Latest News",
    text: "Give me the latest news",
    icon: <Ri24HoursFill size="34" />,
  },
  {
    color: "#00838f",
    title: "Country News",
    text: "What's up in Morocco",
    icon: <BiWorld size="34" />,
  },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
    icon: <BsFilter size="34" />,
  },
  {
    color: "#4527a0",
    title: "News by trending",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
    icon: <BiTrendingUp size="34" />,
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
    icon: <VscSourceControl size="34" />,
  },
]
const CardsContainer = ({ articles, activeArticle }) => {
  const classes = useStyles()

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="scretch"
          spacing={3}
        >
          {infoCards.map((info) => (
            <Grid
              key={info.color}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.info_container}
            >
              <div
                className={classes.cardinfo}
                style={{ backgroundColor: info.color }}
              >
                {info.icon}

                <Typography variant="h5">{info.title}</Typography>
                {info.info && (
                  <Typography variant="h6">
                    <strong>{info.title.split(" ")[2]}</strong> <br />
                    {info.info}
                  </Typography>
                )}
                <Typography variant="h6">+ Try saying : {info.text}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
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
          <Grid
            key={idx}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
          >
            <NewsCard
              article={article}
              i={idx}
              activeArticle={activeArticle === idx}
            />
          </Grid>
        ))}
      </Grid>
    </Grow>
  )
}

export default CardsContainer
