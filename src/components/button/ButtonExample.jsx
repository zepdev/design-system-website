import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@zlab-de/zel-react/Button"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: `${theme.space.s.rem}rem`,
    marginBottom: `${theme.space.s.rem}rem`,
  },
  heading: {
    marginBottom: `${theme.space.s.rem}rem`,
  },
  fullWidth: {
    border: `1px solid ${theme.color.global.lightGray}`,
    padding: `${theme.space.s.rem}rem`,
    width: 200,
  },
  text: {
    marginBottom: 30,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
  },
}))

function ButtonExample() {
  const classes = useStyles()
  const [text, setText] = useState("")

  return (
    <>
      <p data-testId="buttonText" className={classes.text}>
        You Clicked: {text}
      </p>
      <p className={classes.heading}>Primary</p>
      <div className={classes.container}>
        <Button variant="primary" onClick={() => setText("primary")}>
          Primary
        </Button>
        <Button
          variant="primary"
          size="medium"
          onClick={() => setText("primary medium")}
        >
          Primary Medium
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => setText("primary small")}
        >
          Primary Small
        </Button>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
      </div>
      <div className={classes.container}>
        <Button
          variant="primary"
          fullWidth
          onClick={() => setText("primary full width")}
        >
          Primary Full Width
        </Button>
      </div>
      <p className={classes.heading}>Secondary</p>

      <div className={classes.container}>
        <Button variant="secondary" onClick={() => setText("secondary")}>
          Secondary
        </Button>
        <Button
          variant="secondary"
          size="medium"
          onClick={() => setText("secondary medium")}
        >
          Secondary Medium
        </Button>
        <Button
          variant="secondary"
          size="small"
          onClick={() => setText("secondary small")}
        >
          Secondary Small
        </Button>
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
      </div>
      <div className={classes.container}>
        <Button
          variant="secondary"
          fullWidth
          onClick={() => setText("secondary full width")}
        >
          Secondary Full Width
        </Button>
      </div>
    </>
  )
}

export default ButtonExample
