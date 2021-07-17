import React, { useState, useEffect, createRef } from "react"
import {
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core"
import useStyle from "./Styles"

const NewsCard = ({
  i,
  article: { description, publishedAt, title, source, url, urlToImage },
  activeArticle,
}) => {
  const classes = useStyle()
  const [elementRefs, setelementRefs] = useState([])
  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 50)
  }

  useEffect(() => {
    setelementRefs((refs) =>
      Array(20)
        .fill()
        .map((_, idx) => refs[idx] || createRef())
    )
  }, [])
  useEffect(() => {
    if (activeArticle && elementRefs[i]) {
      scrollToRef(elementRefs[i])
    }
  }, [i, activeArticle, elementRefs])
  return (
    <Card
      ref={elementRefs[i]}
      className={classes.card && activeArticle && classes.activeCard}
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.image}
          image={
            urlToImage ||
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          }
        />

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="subtitle1"
          component="h2"
        >
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textsecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard
