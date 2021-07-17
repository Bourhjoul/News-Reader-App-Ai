import { makeStyles } from "@material-ui/styles"

const styles = makeStyles({
  container: {
    padding: "0 4%",
    width: "100%",
    margin: "0",
  },
  cardinfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "55vh",
    padding: "08%",
    borderRadius: "10px",
    color: "white",
    boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.6)",
  },
  info_container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  activeCard: {
    "&::before": {
      content: '"reading this"',
      display: "block",
      height: 60,
      marginTop: -60,
    },
  },
})

export default styles
