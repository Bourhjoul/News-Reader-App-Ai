import { makeStyles } from "@material-ui/styles"

const styles = makeStyles({
  image: {
    height: 250,
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderTop: "10px solid white",
    width: "100%",
  },
  activeCard: {
    borderTop: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    fontSize: "18px",
    fontWeight: "bolder",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
})

export default styles
