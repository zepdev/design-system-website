import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@zlab-de/zel-react/IconButton'
import StarIcon from '@zlab-de/zel-react-icons/IconEssentialStar'

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: 30,
  },
}))

function IconButtonExample() {
  const classes = useStyles()
  return (
    <>
      <IconButton variant="primary" className={classes.button}>
        <StarIcon />
      </IconButton>
      <IconButton variant="secondary">
        <StarIcon />
      </IconButton>
    </>
  )
}

export default IconButtonExample
